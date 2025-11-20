// AttendancePage.jsx
import React, { useMemo, useState, useEffect, useRef } from "react";
import {
    ChevronLeft,
    ChevronRight,
    Calendar as CalIcon,
    Plus,
    Search,
    Trash2,
    Settings,
} from "lucide-react";

/* -------------------------
  Date helpers (no external libs)
------------------------- */
function startOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
}
function endOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}
function startOfWeek(date, weekStartsOn = 0) {
    const d = new Date(date);
    const diff = (d.getDay() - weekStartsOn + 7) % 7;
    d.setDate(d.getDate() - diff);
    d.setHours(0, 0, 0, 0);
    return d;
}
function addDays(date, n) {
    const d = new Date(date);
    d.setDate(d.getDate() + n);
    return d;
}
function sameDay(a, b) {
    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
}
function formatDateLocal(d) {
    if (!d) return "";
    return d.toLocaleDateString();
}
function formatTime(d) {
    if (!d) return "";
    const hr = d.getHours();
    const min = d.getMinutes();
    const ampm = hr >= 12 ? "PM" : "AM";
    const h = hr % 12 || 12;
    return `${h}:${String(min).padStart(2, "0")} ${ampm}`;
}
function dateKey(d) {
    return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

/* -------------------------
  Sample calendars & events
------------------------- */
const initialCalendars = [
    { id: "work", name: "Work", color: "#6D28D9", visible: true },
    { id: "personal", name: "Personal", color: "#06B6D4", visible: true },
    { id: "holidays", name: "Holidays", color: "#F97316", visible: true },
];

const initialEvents = [
    {
        id: 1,
        title: "Project Check-in",
        calendarId: "work",
        start: new Date(new Date().getFullYear(), new Date().getMonth(), 4, 10, 0),
        end: new Date(new Date().getFullYear(), new Date().getMonth(), 4, 11, 0),
        allDay: false,
    },
    {
        id: 2,
        title: "Team Sync",
        calendarId: "work",
        start: new Date(new Date().getFullYear(), new Date().getMonth(), 9, 13, 0),
        end: new Date(new Date().getFullYear(), new Date().getMonth(), 9, 14, 0),
        allDay: false,
    },
    {
        id: 3,
        title: "OOO - Conference",
        calendarId: "personal",
        start: new Date(new Date().getFullYear(), new Date().getMonth(), 24),
        end: new Date(new Date().getFullYear(), new Date().getMonth(), 26),
        allDay: true,
    },
];

/* -------------------------
  Sample punches (date-keyed)
------------------------- */
function samplePunchesForCurrentMonth() {
    const now = new Date();
    const m = now.getMonth();
    const y = now.getFullYear();
    const p = {};
    p[`${y}-${m}-1`] = { in: "09:12 AM", out: "06:01 PM", type: "PRESENT" };
    p[`${y}-${m}-2`] = { in: "09:20 AM", out: "06:10 PM", type: "PRESENT" };
    p[`${y}-${m}-3`] = { in: "09:00 AM", out: "05:58 PM", type: "PRESENT" };
    p[`${y}-${m}-5`] = { in: null, out: null, type: "MISSED" };
    p[`${y}-${m}-7`] = { in: "09:16 AM", out: "06:00 PM", type: "PRESENT" };
    p[`${y}-${m}-11`] = { in: null, out: null, type: "OD" };
    p[`${y}-${m}-14`] = { in: "09:10 AM", out: "06:03 PM", type: "PRESENT" };
    p[`${y}-${m}-17`] = { in: "09:05 AM", out: "06:15 PM", type: "PRESENT" };
    p[`${y}-${m}-22`] = { in: null, out: null, type: "LEAVE" };
    return p;
}

/* -------------------------
  MAIN component (responsive)
------------------------- */
export default function Calender() {
    const [currentMonth, setCurrentMonth] = useState(() => startOfMonth(new Date()));
    const [calendars, setCalendars] = useState(initialCalendars);
    const [events, setEvents] = useState(initialEvents);

    const [showNewEvent, setShowNewEvent] = useState(false);
    const [newEventData, setNewEventData] = useState({
        title: "",
        calendarId: initialCalendars[0].id,
        start: new Date(),
        end: new Date(),
        allDay: false,
        punchIn: "",
        punchOut: "",
        punchType: "PRESENT",
    });

    const [selectedEvent, setSelectedEvent] = useState(null);
    const [selectedEventAnchor, setSelectedEventAnchor] = useState(null);

    // sync mini and main
    const [miniMonth, setMiniMonth] = useState(() => startOfMonth(new Date()));

    // punches keyed by dateKey
    const [punches, setPunches] = useState(() => samplePunchesForCurrentMonth());

    // tooltip / hover state
    const [hoverDay, setHoverDay] = useState(null);
    const [tooltipPos, setTooltipPos] = useState(null);
    const [mobileTooltip, setMobileTooltip] = useState({ open: false, day: null, x: 0, y: 0 });

    // responsive month grid
    const monthGrid = useMemo(() => {
        const start = startOfWeek(startOfMonth(currentMonth), 0);
        const end = addDays(start, 6 * 7 - 1);
        const days = [];
        for (let d = new Date(start); d <= end; d = addDays(d, 1)) days.push(new Date(d));
        return days;
    }, [currentMonth]);

    const visibleCalIds = useMemo(
        () => new Set(calendars.filter((c) => c.visible).map((c) => c.id)),
        [calendars]
    );

    function eventsForDay(day) {
        return events.filter((ev) => {
            if (!visibleCalIds.has(ev.calendarId)) return false;
            const s = new Date(ev.start);
            const e = ev.end ? new Date(ev.end) : new Date(ev.start);
            const startDateOnly = new Date(s.getFullYear(), s.getMonth(), s.getDate());
            const endDateOnly = new Date(e.getFullYear(), e.getMonth(), e.getDate());
            const target = new Date(day.getFullYear(), day.getMonth(), day.getDate());
            return target >= startDateOnly && target <= endDateOnly;
        });
    }

    // navigation + sync mini
    function prevMonth() {
        setCurrentMonth((prev) => {
            const nm = new Date(prev.getFullYear(), prev.getMonth() - 1, 1);
            setMiniMonth(nm);
            return nm;
        });
    }
    function nextMonth() {
        setCurrentMonth((prev) => {
            const nm = new Date(prev.getFullYear(), prev.getMonth() + 1, 1);
            setMiniMonth(nm);
            return nm;
        });
    }
    function goToday() {
        const t = startOfMonth(new Date());
        setCurrentMonth(t);
        setMiniMonth(t);
    }

    // new event modal + saving (also writes punch if provided)
    function openNewEventAt(day) {
        setNewEventData({
            title: "",
            calendarId: calendars[0].id,
            start: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 9, 0),
            end: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 10, 0),
            allDay: false,
            punchIn: "",
            punchOut: "",
            punchType: "PRESENT",
        });
        setShowNewEvent(true);
    }
    function saveNewEvent() {
        const id = Math.max(0, ...events.map((e) => e.id)) + 1;
        const ev = { ...newEventData, id, start: new Date(newEventData.start), end: newEventData.end ? new Date(newEventData.end) : undefined };
        setEvents((p) => [...p, ev]);

        // save punch if included
        const dKey = dateKey(new Date(ev.start));
        if (newEventData.punchIn || newEventData.punchOut || newEventData.punchType) {
            setPunches((prev) => ({
                ...prev,
                [dKey]: {
                    in: newEventData.punchIn || (prev[dKey] && prev[dKey].in) || null,
                    out: newEventData.punchOut || (prev[dKey] && prev[dKey].out) || null,
                    type: newEventData.punchType || (prev[dKey] && prev[dKey].type) || "PRESENT",
                },
            }));
        }

        setShowNewEvent(false);
    }

    function deleteEvent(evId) {
        setEvents((p) => p.filter((e) => e.id !== evId));
        setSelectedEvent(null);
    }

    function toggleCalendar(id) {
        setCalendars((prev) => prev.map((c) => (c.id === id ? { ...c, visible: !c.visible } : c)));
    }

    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") {
                setShowNewEvent(false);
                setSelectedEvent(null);
                setMobileTooltip({ open: false, day: null, x: 0, y: 0 });
            }
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const containerRef = useRef();

    // helper to get punch for day
    function punchesForDay(day) {
        return punches[dateKey(day)] || null;
    }

    // when mini month day is hovered (desktop), show tooltip in parent
    function handleMiniHover(day, pos) {
        // adjust tooltip to stay on screen
        const x = Math.min(pos.x, window.innerWidth - 230);
        const y = Math.min(pos.y, window.innerHeight - 200);
        setHoverDay(day);
        setTooltipPos({ x, y });
    }
    function handleMiniHoverLeave() {
        setHoverDay(null);
        setTooltipPos(null);
    }

    // mobile: tap on mini-day will open a small inline "mobile tooltip"
    function handleMiniClickMobile(day, e) {
        const targetRect = e.currentTarget.getBoundingClientRect();
        setMobileTooltip({ open: true, day, x: targetRect.left, y: targetRect.top });
        // sync main month to day
        setCurrentMonth(startOfMonth(day));
    }

    return (
        <div className="max-w-[1300px] mx-auto" ref={containerRef}>

            {/* Grid: left mini / right main */}
            {/* Responsive breakpoints:
        - xs / sm: stacked (mini on top, main below)
        - md: two-column (mini left, main right)
        - lg+: same but with tighter spacing / proportions
    */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* LEFT: Sidebar / Mini month (col-span 4 on md, 3 on lg) */}
                <div className="col-span-12 md:col-span-4 lg:col-span-3 ">
                    <div className="bg-white/70 backdrop-blur rounded-2xl shadow-2xl p-4 top-4 ">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="text-lg font-semibold">Calendar</div>
                            <div className="ml-auto">
                                <Settings className="w-4 h-4 text-gray-500" />
                            </div>
                        </div>

                        <div className="relative mb-4">
                            <div className="flex items-center gap-2 bg-white rounded-lg p-2 shadow-sm">
                                <Search className="w-4 h-4 text-gray-400" />
                                <input className="w-full bg-transparent outline-none text-sm" placeholder="Search event..." />
                            </div>
                        </div>

                        <MiniMonthModern
                            month={miniMonth}
                            onMonthChange={(m) => { const fm = startOfMonth(m); setMiniMonth(fm); setCurrentMonth(fm); }}
                            onDayClick={(d) => { setCurrentMonth(startOfMonth(d)); }}
                            events={events}
                            punches={punches}
                            calendars={calendars}
                            onHover={(d, pos) => handleMiniHover(d, pos)}
                            onHoverLeave={() => handleMiniHoverLeave()}
                            onClickMobile={(d, e) => handleMiniClickMobile(d, e)}
                        />

                        <div className="bg-white/70 backdrop-blur rounded-2xl p-4 mt-4">
                            <div className="flex items-center justify-between mb-3">
                                <div className="text-sm font-medium">Quick Actions</div>
                                <div className="text-xs text-gray-400">Shortcuts</div>
                            </div>

                            <div className="space-y-3">
                                <button onClick={() => setShowNewEvent(true)} className="w-full bg-black text-white py-2 rounded-full text-sm shadow">New event</button>

                                <div className="pt-3">
                                    <div className="text-sm font-medium mb-2">Today's events</div>
                                    <div className="space-y-2 text-sm text-gray-700 max-h-36 overflow-auto">
                                        {events.filter((ev) => sameDay(new Date(), new Date(ev.start))).length === 0 && <div className="text-gray-400">No events today</div>}
                                        {events.filter((ev) => sameDay(new Date(), new Date(ev.start))).map((ev) => {
                                            const cal = calendars.find((c) => c.id === ev.calendarId) || { color: '#888' };
                                            return (
                                                <div key={ev.id} className="flex items-center gap-2">
                                                    <div style={{ width: 8, height: 8, background: cal.color }} className="rounded-full" />
                                                    <div className="flex-1">{ev.title}</div>
                                                    <div className="text-xs text-gray-400">{ev.allDay ? 'All day' : formatTime(new Date(ev.start))}</div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* CENTER: main calendar (col-span 8 on md, 9 on lg) */}
                <div className="col-span-12 md:col-span-8 lg:col-span-9">
                    <div className="bg-white/80 backdrop-blur rounded-2xl shadow-2xl p-4">
                        {/* header */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between mb-4">
                            <div className="flex items-center gap-3 w-full sm:w-auto">
                                <button onClick={goToday} className="px-3 py-1 rounded-md text-sm bg-transparent hover:bg-gray-100">Today</button>
                                <button onClick={prevMonth} className="p-2 rounded-md hover:bg-gray-100"><ChevronLeft className="w-4 h-4" /></button>
                                <div className="text-lg font-semibold">{currentMonth.toLocaleString(undefined, { month: 'long', year: 'numeric' })}</div>
                                <button onClick={nextMonth} className="p-2 rounded-md hover:bg-gray-100"><ChevronRight className="w-4 h-4" /></button>
                            </div>

                            {/* optional view toggles hidden on smallest devices */}
                            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                <button className="px-3 py-1 rounded-md text-sm bg-transparent">Month</button>
                            </div>
                        </div>

                        {/* week labels */}
                        <div className="grid grid-cols-7 text-sm text-gray-500 mb-3">
                            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                                <div key={d} className="text-center">{d}</div>
                            ))}
                        </div>

                        {/* calendar grid - responsive cell heights:
              - mobile: smaller cells
              - md+: your min-h preserved
          */}
                        <div className="grid grid-cols-7 gap-3">
                            {monthGrid.map((day, idx) => {
                                const inMonth = day.getMonth() === currentMonth.getMonth();
                                const dayEvents = eventsForDay(day);
                                const punch = punchesForDay(day);

                                return (
                                    <div
                                        key={idx}
                                        onDoubleClick={() => openNewEventAt(day)}
                                        onClick={() => {
                                            // on mobile, tapping a day should open mobile tooltip if exists
                                            if (window.innerWidth < 640) {
                                                const p = punchesForDay(day);
                                                if (p) {
                                                    setMobileTooltip({ open: true, day, x: 16, y: window.innerHeight - 220 });
                                                } else {
                                                    setMobileTooltip((s) => ({ ...s, open: false }));
                                                }
                                            }
                                        }}
                                        className={`p-2 sm:p-3 rounded-2xl relative cursor-pointer transition transform hover:scale-[1.01] ${inMonth ? '' : 'opacity-70'}`}
                                        style={{
                                            minHeight: window.innerWidth < 640 ? "78px" : "115px",
                                            background: inMonth
                                                ? "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.78))"
                                                : "linear-gradient(180deg, rgba(250,250,250,0.72), rgba(250,250,250,0.68))"
                                        }}
                                    >
                                        <div className="flex justify-between items-start">
                                            <div className={`text-sm font-medium ${inMonth ? 'text-gray-800' : 'text-gray-400'}`}>{day.getDate()}</div>
                                        </div>

                                        <div className="mt-2 space-y-1">
                                            {/* Punch rendering (unchanged design) */}
                                            {punch && (
                                                <>
                                                    {punch.type === "LEAVE" && (
                                                        <div className="text-xs font-medium text-white bg-red-600 p-1 text-center rounded-lg">Leave</div>
                                                    )}
                                                    {punch.type === "MISSED" && (
                                                        <div className="text-xs font-medium bg-[#f97316] p-1 text-center rounded-lg">Miss Punch</div>
                                                    )}
                                                    {punch.type === "OD" && (
                                                        <div className="text-xs font-medium bg-[#3b82f6] p-1 text-center rounded-lg">On Duty</div>
                                                    )}
                                                    {punch.type === "PERMISSION" && (
                                                        <div className="text-xs font-medium bg-[#eab308] p-1 text-center rounded-lg">Permission</div>
                                                    )}
                                                    {punch.type === "PRESENT" && (
                                                        <div className="space-y-1">
                                                            <div className="text-xs font-medium  bg-green-400 p-1 text-center rounded-lg">In: {punch.in || "--"}</div>
                                                            <div className="text-xs font-medium bg-blue-400 p-1 text-center rounded-lg">Out: {punch.out || "--"}</div>
                                                        </div>
                                                    )}
                                                </>
                                            )}

                                            {/* Events (unchanged) */}
                                            {dayEvents.slice(0, 3).map((ev) => {
                                                const cal = calendars.find((c) => c.id === ev.calendarId) || { color: '#888' };
                                                return (
                                                    <div
                                                        key={ev.id}
                                                        onClick={(evnt) => { evnt.stopPropagation(); setSelectedEvent(ev); setSelectedEventAnchor({ x: evnt.clientX, y: evnt.clientY }); }}
                                                        className="text-xs rounded-lg px-2 py-1 truncate"
                                                        style={{
                                                            background: cal.color,
                                                            color: 'white',
                                                            boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        {ev.title}
                                                    </div>
                                                );
                                            })}

                                            {dayEvents.length > 3 && (
                                                <div className="text-xs text-gray-500">+{dayEvents.length - 3} more</div>
                                            )}

                                            {!punch && dayEvents.length === 0 && <div className="text-xs text-gray-400">—</div>}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>

            {/* selected event popup (unchanged) */}
            {selectedEvent && selectedEventAnchor && (
                <div className="fixed z-50" style={{ left: Math.min(selectedEventAnchor.x + 8, window.innerWidth - 300), top: Math.min(selectedEventAnchor.y + 8, window.innerHeight - 120) }}>
                    <div className="bg-white rounded-lg shadow-2xl p-3 w-72">
                        <div className="flex items-start justify-between">
                            <div>
                                <div className="font-semibold">{selectedEvent.title}</div>
                                <div className="text-xs text-gray-500">{formatDateLocal(new Date(selectedEvent.start))} {selectedEvent.allDay ? "(All day)" : `${formatTime(new Date(selectedEvent.start))} - ${formatTime(new Date(selectedEvent.end))}`}</div>
                            </div>
                            <button onClick={() => setSelectedEvent(null)} className="text-gray-400">✕</button>
                        </div>
                        <div className="mt-3 text-sm flex items-center justify-between">
                            <div className="text-xs text-gray-500">Calendar</div>
                            <div className="font-medium">{calendars.find(c => c.id === selectedEvent.calendarId)?.name}</div>
                        </div>
                        <div className="mt-3 flex items-center gap-2 justify-end">
                            <button onClick={() => deleteEvent(selectedEvent.id)} className="text-red-600 text-xs flex items-center gap-1"><Trash2 className="w-3 h-3" /> Delete</button>
                        </div>
                    </div>
                </div>
            )}

            {/* new event popup (unchanged) */}
            {showNewEvent && (
                <div className="fixed inset-0 z-50 flex items-start justify-center pointer-events-auto">
                    <div className="absolute inset-0 bg-black/30" onClick={() => setShowNewEvent(false)} />
                    <div className="relative mt-12 sm:mt-28 w-[92%] sm:w-[420px] bg-white rounded-2xl shadow-2xl p-5 z-50">
                        <div className="flex items-center justify-between mb-3">
                            <div className="text-lg font-semibold">New event</div>
                            <button onClick={() => setShowNewEvent(false)} className="text-gray-500">✕</button>
                        </div>

                        <div className="space-y-3">
                            <input
                                value={newEventData.title}
                                onChange={(e) => setNewEventData((d) => ({ ...d, title: e.target.value }))}
                                placeholder="Event title"
                                className="w-full border border-transparent focus:border-gray-200 rounded-md px-3 py-2 shadow-sm"
                            />

                            <div className="grid grid-cols-2 gap-2">
                                <input
                                    type="date"
                                    value={newEventData.start.toISOString().slice(0, 10)}
                                    onChange={(e) => {
                                        const date = new Date(e.target.value);
                                        setNewEventData((d) => ({ ...d, start: new Date(date.getFullYear(), date.getMonth(), date.getDate(), d.start.getHours(), d.start.getMinutes()) }));
                                    }}
                                    className="rounded-md px-2 py-2 border border-transparent shadow-sm"
                                />
                                <input
                                    type="date"
                                    value={newEventData.end.toISOString().slice(0, 10)}
                                    onChange={(e) => {
                                        const date = new Date(e.target.value);
                                        setNewEventData((d) => ({ ...d, end: new Date(date.getFullYear(), date.getMonth(), date.getDate(), d.end.getHours(), d.end.getMinutes()) }));
                                    }}
                                    className="rounded-md px-2 py-2 border border-transparent shadow-sm"
                                />
                            </div>

                            <div className="flex gap-2">
                                <input
                                    type="time"
                                    value={newEventData.start.toTimeString().slice(0, 5)}
                                    onChange={(e) => {
                                        const [hh, mm] = e.target.value.split(":").map(Number);
                                        setNewEventData((d) => ({ ...d, start: new Date(d.start.getFullYear(), d.start.getMonth(), d.start.getDate(), hh, mm) }));
                                    }}
                                    className="rounded-md px-2 py-2 border border-transparent shadow-sm"
                                />
                                <input
                                    type="time"
                                    value={newEventData.end.toTimeString().slice(0, 5)}
                                    onChange={(e) => {
                                        const [hh, mm] = e.target.value.split(":").map(Number);
                                        setNewEventData((d) => ({ ...d, end: new Date(d.end.getFullYear(), d.end.getMonth(), d.end.getDate(), hh, mm) }));
                                    }}
                                    className="rounded-md px-2 py-2 border border-transparent shadow-sm"
                                />

                                <label className="flex items-center gap-2 text-sm ml-auto">
                                    <input type="checkbox" checked={newEventData.allDay} onChange={(e) => setNewEventData((d) => ({ ...d, allDay: e.target.checked }))} />
                                    All day
                                </label>
                            </div>

                            <div>
                                <select value={newEventData.calendarId} onChange={(e) => setNewEventData((d) => ({ ...d, calendarId: e.target.value }))} className="w-full rounded-md px-2 py-2 border border-transparent shadow-sm">
                                    {calendars.map((c) => <option value={c.id} key={c.id}>{c.name}</option>)}
                                </select>
                            </div>

                            {/* optional punches */}
                            <div className="grid grid-cols-3 gap-2">
                                <input
                                    placeholder="Punch IN (09:12 AM)"
                                    value={newEventData.punchIn}
                                    onChange={(e) => setNewEventData((d) => ({ ...d, punchIn: e.target.value }))}
                                    className="rounded-md px-2 py-2 border border-transparent shadow-sm text-sm"
                                />
                                <input
                                    placeholder="Punch OUT (06:01 PM)"
                                    value={newEventData.punchOut}
                                    onChange={(e) => setNewEventData((d) => ({ ...d, punchOut: e.target.value }))}
                                    className="rounded-md px-2 py-2 border border-transparent shadow-sm text-sm"
                                />
                                <select value={newEventData.punchType} onChange={(e) => setNewEventData((d) => ({ ...d, punchType: e.target.value }))} className="rounded-md px-2 py-2 border border-transparent shadow-sm text-sm">
                                    <option value="PRESENT">PRESENT</option>
                                    <option value="LEAVE">LEAVE</option>
                                    <option value="OD">ON DUTY</option>
                                    <option value="MISSED">MISSED</option>
                                    <option value="PERMISSION">PERMISSION</option>
                                </select>
                            </div>

                            <div className="flex items-center justify-end gap-2">
                                <button onClick={() => setShowNewEvent(false)} className="px-4 py-2 rounded-md">Cancel</button>
                                <button onClick={saveNewEvent} className="px-4 py-2 rounded-md bg-black text-white">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* tooltip for mini (desktop) */}
            {hoverDay && tooltipPos && (
                <div className="fixed z-50 w-56 bg-white rounded-lg shadow-xl p-3 text-xs" style={{ left: tooltipPos.x, top: tooltipPos.y }}>
                    <div className="font-medium mb-1">{hoverDay.toDateString()}</div>
                    {events.filter((ev) => sameDay(new Date(ev.start), hoverDay)).map((ev) => {
                        const cal = calendars.find((c) => c.id === ev.calendarId) || { color: '#ddd' };
                        return (
                            <div key={ev.id} className="flex items-center gap-2 mb-1">
                                <span className="w-2 h-2 rounded-full" style={{ background: cal.color }} />
                                <div className="flex-1">
                                    <div className="font-medium">{ev.title}</div>
                                    {!ev.allDay && <div className="text-gray-400">{formatTime(new Date(ev.start))}{ev.end ? ` • ${formatTime(new Date(ev.end))}` : ''}</div>}
                                </div>
                            </div>
                        );
                    })}

                    {punches[dateKey(hoverDay)] ? (
                        <div className="mt-1">
                            <div className="text-gray-500">Punch</div>
                            <div className="text-sm mt-1">
                                {punches[dateKey(hoverDay)].type === "LEAVE" && <div>Leave</div>}
                                {punches[dateKey(hoverDay)].type === "MISSED" && <div>Miss Punch</div>}
                                {punches[dateKey(hoverDay)].type === "OD" && <div>On Duty</div>}
                                {punches[dateKey(hoverDay)].type === "PERMISSION" && <div>Permission</div>}
                                {punches[dateKey(hoverDay)].type === "PRESENT" && (
                                    <>
                                        <div>IN: {punches[dateKey(hoverDay)].in || '--'}</div>
                                        <div>OUT: {punches[dateKey(hoverDay)].out || '--'}</div>
                                    </>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="text-gray-400">No punch info</div>
                    )}
                </div>
            )}

            {/* mobile inline tooltip (bottom) */}
            {mobileTooltip.open && mobileTooltip.day && (
                <div className="fixed left-1/2 transform -translate-x-1/2 bottom-4 z-50 w-[92%] sm:w-80 bg-white rounded-xl shadow-xl p-3 text-sm">
                    <div className="font-medium">{mobileTooltip.day.toDateString()}</div>
                    <div className="mt-2 text-xs text-gray-600">
                        {events.filter((ev) => sameDay(new Date(ev.start), mobileTooltip.day)).length === 0 && <div className="text-gray-400">No events</div>}
                        {events.filter((ev) => sameDay(new Date(ev.start), mobileTooltip.day)).map(ev => (
                            <div key={ev.id} className="flex items-center gap-2">
                                <div style={{ width: 8, height: 8, background: (calendars.find(c => c.id === ev.calendarId) || { color: '#888' }).color }} className="rounded-full" />
                                <div>{ev.title} {!ev.allDay && <span className="text-gray-400 text-xs"> • {formatTime(new Date(ev.start))}</span>}</div>
                            </div>
                        ))}
                        {punches[dateKey(mobileTooltip.day)] ? (
                            <div className="mt-2">
                                <div className="font-medium">Punch</div>
                                <div className="text-xs text-gray-500">
                                    {punches[dateKey(mobileTooltip.day)].type === "PRESENT" ? `IN: ${punches[dateKey(mobileTooltip.day)].in || '--'} • OUT: ${punches[dateKey(mobileTooltip.day)].out || '--'}` : punches[dateKey(mobileTooltip.day)].type}
                                </div>
                            </div>
                        ) : null}
                    </div>
                    <div className="mt-3 flex justify-end">
                        <button onClick={() => setMobileTooltip({ open: false, day: null, x: 0, y: 0 })} className="px-3 py-1 rounded bg-gray-100 text-sm">Close</button>
                    </div>
                </div>
            )}

        </div>
    );
}

/* -------------------------
  MiniMonthModern (synced & responsive)
------------------------- */
function MiniMonthModern({ month, onMonthChange, onDayClick, events = [], punches = {}, calendars = [], onHover, onHoverLeave, onClickMobile }) {
    const year = month.getFullYear();
    const mon = month.getMonth();
    const first = startOfMonth(month);
    const start = startOfWeek(first, 0);
    const days = [];
    for (let d = new Date(start); days.length < 42; d = addDays(d, 1)) days.push(new Date(d));

    function eventsFor(date) {
        return events.filter((e) => sameDay(new Date(e.start), date));
    }
    function punchFor(date) {
        return punches[dateKey(date)] || null;
    }

    // helper for pointer events: on desktop use mouse enter/leave; on touch use onClickMobile
    const isTouch = typeof window !== "undefined" && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    return (
        <div className="bg-white rounded-lg p-3 shadow-sm mb-3">
            <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-semibold">{month.toLocaleString(undefined, { month: 'long', year: 'numeric' })}</div>
                <div className="flex items-center gap-1">
                    <button onClick={() => onMonthChange(new Date(year, mon - 1, 1))} className="p-1 hover:bg-gray-100 rounded"><ChevronLeft className="w-4 h-4" /></button>
                    <button onClick={() => onMonthChange(new Date(year, mon + 1, 1))} className="p-1 hover:bg-gray-100 rounded"><ChevronRight className="w-4 h-4" /></button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-0 text-xs text-center text-gray-400 mb-1">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => <div key={d}>{d}</div>)}
            </div>

            <div className="grid grid-cols-7 gap-1 text-sm">
                {days.map((d, i) => {
                    const isThisMonth = d.getMonth() === month.getMonth();
                    const evs = eventsFor(d);
                    const p = punchFor(d);

                    return (
                        <div
                            key={i}
                            onClick={(e) => {
                                onDayClick(d);
                                if (isTouch) onClickMobile?.(d, e);
                            }}
                            onMouseEnter={(e) => { if (!isTouch) { const rect = e.currentTarget.getBoundingClientRect(); onHover?.(d, { x: rect.left + 8, y: rect.top + 28 }); } }}
                            onMouseLeave={() => { if (!isTouch) onHoverLeave?.(); }}
                            className={`text-center py-1 rounded cursor-pointer ${isThisMonth ? 'text-gray-700' : 'text-gray-300'} hover:bg-gray-50`}
                        >
                            <div className="text-xs">{d.getDate()}</div>

                            {/* event dots */}
                            <div className="flex items-center justify-center gap-1 mt-1">
                                {evs.slice(0, 3).map((ev) => {
                                    const cal = calendars.find((c) => c.id === ev.calendarId) || { color: '#aaa' };
                                    return <span key={ev.id} className="inline-block rounded-full" style={{ width: 7, height: 7, background: cal.color }} />;
                                })}

                                {/* punch marker if exists */}
                                {p && (
                                    <span
                                        className="inline-block rounded-full"
                                        style={{
                                            width: 7,
                                            height: 7,
                                            background: p.type === "LEAVE" ? "#ef4444" : (p.type === "MISSED" ? "#f97316" : (p.type === "OD" ? "#3b82f6" : "#10b981"))
                                        }}
                                    />
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
