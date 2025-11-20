import React from "react";
import {
  User,
  Phone,
  Mail,
  Briefcase,
  CreditCard,
  MapPin,
  HeartPulse,
  Contact,
} from "lucide-react";

export default function MyAccount() {
  return (
    <div className="w-full flex bg-gray-50 overflow-hidden px-2">

      <div className="
        w-80 h-full bg-white border border-gray-200 
      rounded-2xl
        p-6 flex flex-col items-center sticky top-10
        shadow-md
      ">
        <img
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
          className="w-28 h-28 rounded-full object-cover shadow-md border-4 border-white"
        />

        <h2 className="text-xl font-semibold mt-4">Parthiban</h2>
        <p className="text-gray-600 text-sm">Full Stack Developer</p>

        {/* ID • DOJ • Dept */}
        <div className="mt-4 w-full space-y-2">
          <Info label="Employee ID" value="EMP1023" />
          <Info label="Department" value="IT" />
          <Info label="Designation" value="Full Stack Developer" />
          <Info label="Date Joined" value="14 March 2023" />
        </div>

        {/* QUICK CONTACTS */}
        <div className="mt-6 w-full space-y-3">
          <Quick icon={<Phone className="w-4 h-4" />} text="+91 98765 43210" />
          <Quick icon={<Mail className="w-4 h-4" />} text="parthiban@example.com" />
        </div>
      </div>

      <div className="flex-1 h-full overflow-y-auto p-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* CARD 1 */}
          <InfoCard
            icon={<User className="w-5 h-5 text-yellow-600" />}
            title="Personal Details"
            fields={[
              { label: "Full Name", value: "Parthiban" },
              { label: "Gender", value: "Male" },
              { label: "Date of Birth", value: "10 Jan 2001" },
              { label: "Nationality", value: "Indian" },
            ]}
          />

          {/* CARD 2 */}
          <InfoCard
            icon={<Phone className="w-5 h-5 text-yellow-600" />}
            title="Contact Details"
            fields={[
              { label: "Phone", value: "+91 98765 43210" },
              { label: "Email", value: "parthiban@example.com" },
              { label: "Alt Email", value: "parthi.work@example.com" },
            ]}
          />

          {/* CARD 3 */}
          <InfoCard
            icon={<Briefcase className="w-5 h-5 text-yellow-600" />}
            title="Work Information"
            fields={[
              { label: "Employee ID", value: "EMP1023" },
              { label: "Department", value: "IT" },
              { label: "Designation", value: "Full Stack Developer" },
              { label: "Work Mode", value: "Hybrid" },
            ]}
          />

          {/* CARD 4 */}
          <InfoCard
            icon={<CreditCard className="w-5 h-5 text-yellow-600" />}
            title="Bank Information"
            fields={[
              { label: "Bank Name", value: "SBI" },
              { label: "Account Number", value: "XXXX 7890" },
              { label: "IFSC Code", value: "SBIN0001234" },
            ]}
          />

          {/* CARD 5 */}
          <InfoCard
            icon={<MapPin className="w-5 h-5 text-yellow-600" />}
            title="Present Address"
            fields={[
              { label: "Address", value: "XYZ Street, Coimbatore" },
              { label: "Pincode", value: "641001" },
            ]}
          />

          {/* CARD 6 */}
          <InfoCard
            icon={<MapPin className="w-5 h-5 text-yellow-600" />}
            title="Permanent Address"
            fields={[
              { label: "Address", value: "ABC Nagar, Chennai" },
              { label: "Pincode", value: "600100" },
            ]}
          />

          {/* CARD 7 */}
          <InfoCard
            icon={<HeartPulse className="w-5 h-5 text-yellow-600" />}
            title="Health Information"
            fields={[
              { label: "Blood Group", value: "O+" },
              { label: "Medical Conditions", value: "None" },
              { label: "Allergies", value: "No Allergies" },
            ]}
          />

          {/* CARD 8 */}
          <InfoCard
            icon={<Contact className="w-5 h-5 text-yellow-600" />}
            title="Emergency Contact"
            fields={[
              { label: "Name", value: "Prakash" },
              { label: "Relation", value: "Brother" },
              { label: "Phone", value: "+91 87654 32109" },
            ]}
          />

        </div>
      </div>


    </div>
  );
}

/* LEFT SIDE SMALL INFO LINE */
function Info({ label, value }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

/* QUICK CONTACT (LEFT) */
function Quick({ icon, text }) {
  return (
    <div className="flex items-center gap-3 p-2 bg-gray-100 rounded-lg">
      {icon}
      <span className="text-sm">{text}</span>
    </div>
  );
}

/* RIGHT SIDE SECTION */
function Section({ title, icon, children }) {
  return (
    <div className="
      bg-white shadow-md border border-gray-200 rounded-2xl p-6 
      hover:shadow-xl hover:-translate-y-1 transition-all duration-300
    ">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-yellow-600">{icon}</span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

/* RIGHT SIDE ITEM ROW */
function Item({ label, value }) {
  return (
    <div className="flex justify-between border-b border-gray-200 pb-2">
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="font-medium text-sm">{value}</p>
    </div>
  );
}


function NewSection({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      {children}
    </div>
  );
}

function Grid({ children }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10">{children}</div>;
}

function Row({ label, value, badge, badgeColor }) {
  return (
    <div className="flex flex-col">
      <span className="text-gray-500 text-sm">{label}</span>

      <div className="flex items-center gap-2 mt-0.5">
        <span className="text-gray-900 font-medium">{value}</span>

        {badge && (
          <span
            className={`
              px-2 py-0.5 text-xs rounded-full text-white
              ${badgeColor ? badgeColor : "bg-yellow-500"}
            `}
          >
            {badge}
          </span>
        )}
      </div>
    </div>
  );
}

function InfoCard({ icon, title, fields }) {
  return (
    <div className="
      bg-white rounded-2xl p-6 border border-gray-200
      shadow-sm hover:shadow-xl hover:-translate-y-1 
      transition-all duration-300
    ">

      {/* TITLE + ICON */}
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      {/* FIELDS */}
      <div className="space-y-3">
        {fields.map((f, index) => (
          <div key={index} className="flex justify-between">
            <span className="text-sm text-gray-500">{f.label}</span>
            <span className="text-sm font-medium">{f.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
