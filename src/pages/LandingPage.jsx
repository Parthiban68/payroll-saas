
import React, { useState } from "react";
import {
    ArrowRight,
    CheckCircle,
    Shield,
    Users,
    Settings,
    X,
} from "lucide-react";
import PricingPage from "./PricingPage";

export default function LandingPage() {
    const [demoOpen, setDemoOpen] = useState(false);

    return (
        <div className="min-h-screen bg-linear-to-br from-[#fffaf2] via-[#fffef9] to-[#fff1c6] text-gray-900">
            {/* NAV */}
            <header className="sticky top-0 z-40 bg-white/40 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <a href="#hero" className="text-xl md:text-2xl font-bold px-4 py-1 rounded-full  text-black">E-Payroll</a>
                        <nav className="hidden md:flex items-center gap-4 text-sm">
                            <a href="#features" className="hover:underline">Features</a>
                            <a href="#integrations" className="hover:underline">Integrations</a>
                            <a href="#testimonials" className="hover:underline">Customers</a>
                            <a href="#pricing" className="hover:underline">Pricing</a>
                        </nav>
                    </div>
                    <div className="flex items-center gap-3">

                        <a
                            href="/login"
                            className="px-5 py-2 rounded-full text-sm font-medium
             bg-white/40 backdrop-blur-xl border border-black/10
             shadow hover:shadow-md hover:scale-[1.03]
             transition-all duration-300"
                        >
                            Login
                        </a>

                        <a
                            href="/register"
                            className="px-6 py-2 rounded-full text-sm font-semibold
             bg-black text-white shadow-md
             hover:shadow-lg hover:scale-[1.03] hover:bg-gray-900
             transition-all duration-300"
                        >
                            Register
                        </a>

                    </div>

                </div>
            </header>

            {/* HERO */}
            <section id="hero" className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-black">
                        Smart payroll, attendance and HR — built for modern teams.
                    </h1>

                    <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                        Automate payroll runs, track IN / OUT punches, manage leaves and
                        employee data — all in one beautiful dashboard tuned for teams of
                        any size.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">

                        {/* Start Free Trial */}
                        <a
                            href="/register"
                            className="px-6 py-3 rounded-full font-semibold text-white 
                            bg-black shadow-xl hover:shadow-2xl hover:scale-[1.03]
                            transition-all duration-300"
                        >
                            Start Free Trial
                        </a>

                        {/* Request Demo */}
                        <button
                            onClick={() => setDemoOpen(true)}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold
             bg-white/70 backdrop-blur-xl border border-gray-300
             text-gray-900 shadow-md
             hover:bg-yellow-300 hover:border-yellow-300 hover:text-black hover:shadow-xl hover:scale-[1.03]
             transition-all duration-300"
                        >
                            Request a Demo <ArrowRight className="w-4 h-4" />
                        </button>

                    </div>


                    {/* highlights */}
                    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-md">
                        <div className="flex items-start gap-2">
                            <div className="mt-1">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                            </div>
                            <div className="text-sm">Automated payroll runs</div>
                        </div>
                        <div className="flex items-start gap-2">
                            <div className="mt-1">
                                <Shield className="w-5 h-5 text-yellow-500" />
                            </div>
                            <div className="text-sm">Statutory compliance</div>
                        </div>
                        <div className="flex items-start gap-2">
                            <div className="mt-1">
                                <Users className="w-5 h-5 text-blue-500" />
                            </div>
                            <div className="text-sm">Employee self-service</div>
                        </div>
                    </div>
                </div>

                {/* Mockup image / designer panel */}
                <div className="relative">
                    <div className="rounded-3xl shadow-2xl overflow-hidden border border-white/50">
                        {/* Use an image of people/team (replace URL if you have one) */}
                        <img
                            src="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg"
                            alt="Team working"
                            className="w-full h-80 object-cover"
                        />
                    </div>

                    <div className="absolute -bottom-8 right-6 bg-white/80 backdrop-blur rounded-2xl p-3 shadow-lg border border-white/50">
                        <div className="text-xs text-gray-600">Trusted by</div>
                        <div className="flex items-center gap-3 mt-2">
                            <img
                                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBDgMBEQACEQEDEQH/xAAcAAACAQUBAAAAAAAAAAAAAAAABwUBAwQGCAL/xABMEAABAwMBBgEIBQgGCAcAAAABAgMEAAURBgcSITFBUWETFCIyUnGBkSNyobHBFiRCYoKS0fAXMzREouEVQ1Zjc4PC8UVTVGSEk7L/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAwQBAgUG/8QANBEAAgIBAwIDBgUDBQEAAAAAAAECAwQFETESIRMyQQYUIlFhgRUzQnGRQ1KxIyRT4fDR/9oADAMBAAIRAxEAPwBmXnXOmrI8ti5XaO2+2cKZSreUD7hQGo3HblpmNkQmJsw9ClsIH+IigNanbfZBUoQLE2lOOCnnyfsA/GgICXtt1dI3g15hHzy8mwSR+8TQEM9tR1q/nfvzwz7DTafuTQEU7rDU7xPldQ3dWennrgHyzigMN2+Xd7+uuk5z60lZ/GgMJx9xz+scWr6yiaAtUB6SSlQI4EdaAy2bncGM+QnSW/qPKH3GgM1vVWo2hhq/XZGPZmuD8aAlYm0rWUUDyeoJZxy8qEuf/oGgJ2Btt1bH3RJ8wljqXGSlR+KSB9lAOHZlrtrWsCQt1hEWZGWAtkL3gUkcFDl40BuqeVAVoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoBB7ctDLjTjqW2oWpqQr88QOO4vHr+444+NYbN4Qc+BNqSRzFZNDzg9qA9JbWr1UKPuFY3SN1XOXCMhuBKX6sd0/s1r4kV6k8MPInxB/wX02ier+7rHvrDyKv7idaVmPitluXb5ERAU+gIB5cQSazGyM/KQ5GFfjr/AFI7GFgnlW5UPbSFrcShCSVKOAKw2l3ZtCDnLpSJb8npu6CSyM9CvFV/e6ztx9nsxxTSX8nk2CenkltXuXT3qr5mr9n85fpX8ltVkuCf9Tn3KFbLKq+ZDLRs6P6C2u1T0j0oqx8K2V9b9SF6blrmDLKoMpPNhz92tvEi/Uhlh3x5i/4Ns2WzpFm1ZFkbqkIUoIczkApPCtLJpbNMt4WLOashKL47fY6rbIUgEcqmOXweqAKAKAKApkUBEu6msTM7zF67wW5YP9SuQkL+Wc0BKocQ4nebWlSe6TmgK5HegK0AZoCmRQFaAKAKAKAKAKAKAx5kZqWyth9tLjS0lKkqGQRWGZUpRe8RJa02SmNNMu0RXJERz1mm1em2fd1HuqCzxI+Q7OG8C+X+63TMO17L7s8AUWpqOCPWkuDPyGTVfpyJ/Q63vOjY62jHq+xs0LZNL9Hzm4R2h1S01k/PP4VlYkn5pEb9oaK1tTSiXY2U21By9PlueA3RWyw4+rK0/aXJa+GKRenaC0paoL864F9MdhBccWt8gACt/davkV5e0Oe/1HOmpbqxdLo+9CZMeHnDDJOSlPj41PCuMODnZGZdktO2W5EDnW5VNn0vaHXHW3fIqcfdVusNgcST1qjk2uT6Inq9FwY1ReXkLsuDovTOirdbbW0zOjtSZShvPLWnPpdh4Cp6seMY90cnM1a/IudkJbIkXNIafc9a0xT+xW3gw+RXWpZkeLH/ACYzmhNOL/8ADG0/VJFa+71/IljrGav6jMR3Ztpxz+7vJP6rxFaPEr+RYWv56/Vv9jFd2XWVfqPS2/8AmZ++nukCSPtFlrnZ/Yxv6KoCHkOIuUsFBCgClJ6+6tfc478m8vaPIlFxcI9/oMFpO42lPPAxVw8++dz3QwFAFAU3hx48qASu1baqGA7ZdMvAvA7r8xCvV7pQe/jQCLUtTiytRKlEkkrOcmgJiwamvlkeSbRcJLHHg2lZKT4bp4U9DMYtvZHUeh9QI1DZI8hZQJqUJEttIxuOY4/DOcVrGyMuGTX4tuO0rFtubESMc62IBd632s2fTMvzGM2bhNQcOoaWN1rwJ7+FAQ1q272h95KLlbJMVBPF1BCwn4c6AZliv1rv8Tzq0zWpTXUoPFPgRzFASdAFAFAFAFAFAFAUxxoAoAxQFMigOd9tmuxep6rDbHSbfFX9OtJ4PuDp4pT9p49BQCnHE0BL2G2+du+VdOGGz6Xie1V8i7w47Lk7Oj6d73b1S8qOg9l+lPNG03me1iQ6nEdBH9Unv7z91aY1O3xy5LOt6l4r93q7RQxkgjh071bPOnqgCgCgCgCgCgCgCgKFQHM4xQCM2wbUCsvaf04+QniiXLQef6iD95+FAJPI9UfdQFyMw4+6ltpBUo9K1lJRW7JaaZ2zUIrubzpPS0iXLRGhM+WmL4lSvVbHc9qoWWTvl0x4PYY2HjaXV41/eQ/NKadjaWt7oU4FvOYVIkK4A4H2AcauU1KuOx5nUdQnnW9TWyXArtqG1hcgu2jS7xQ1xQ9OQcKV3Sg9B41KUBL5zwAoC5GYdkOhtpJUs9BWHJR7skqpndNQgt2NPZMJtgvraITPnS5ZS3JQBwSjPPPhnNVFkuVm0V2PQ3aJXj4jsultL5HQ6OVXDzK4PVDIUAUAUAUAUAUAUBQnFALDbRrr8n7cq02x0JuctHpKB4st8ifeelAc3qVvHJ/70BkQYjkuQhpseseJ7CtLJqC3ZZxMeeTaq4Dl2Y6PRcZKHnWiLdEVxz/rXOePxPyqlTB2z65cHqNRyIabjLEp8zXcd7SAgAJAAHICugeOLhoDzvCgAOIJwFAnsDQFd4UAA5oCtAFAFAUKgOdAJLa/tNCTI09p54E8US5aD6p6oQe/c9OXuARqlb2eFAX4kR2W8lplOVH5CtZzUFuyxj488iahBDD0VpCTcpKYtvTk5BekqHotj+eQrntyyJ7eh6+EMbRsfrfebHrZbNbNL2tYSptpttBW/JeVjIHNSieQ+6rtdSrWyPJZmZbl2ddj/YR+1Dak/qJTtssils2kEpU4fRXJ8cc0p8OffHKpSqLDORgd6AzLdb3proS0Bjqo8hUdlirW7LuFg25c+mHHzGNonRkm7O+Qtzfk2UkeWluDgn3dzz4fOqC8TIl9D1cniaNX87B5ac01AsMXyMNrKz67y+K1nx/hV+uqNa2R5PLzrsublY/t8ibSMVIUytAFAFAFAFAFAFAFAa9rbVEPSdheuMtQK/UYZ6uuHkB958KA5MvN1lXm5v3Ge4XH3176ienYDwHKgMNCSpQAHE8qGVFtpIYmhtMPz5jEGOCHnTvPO44NI6mudZJ32dC4PZ4tdek4jvn52dHWm2x7VAYhQ0bjLKQkdz3JPc866EYqMUkePutldY7JvuzM3h8ayRmma22lWPSgWw4553PH92ZIJSf1j+jQCK1ZtQ1JqJSkCUqDEzwYiqKc+9XM0Bqce63CM6p2POltOKOStt9SST7waAamzzbDLhPtW/VLpkxVnCZZHptfW7j7aAfrD7b7CHmVpcaWkKStJyCD1oC7QBQFCrBxigEvtg2mCOH9P6ffIeJ3JUts+p3Qk9+56UAiSrmMUBehRHJb4aaGVdfAVpOagt2WcbFsyLFXAZmhtHP3aQIsQbjKf7RKI4DwHc+FUPiyJ9+D18nRouNsu85D0t0C26ctJbjhDEVlG+44o4zw4qUe9X664wW0Tx2TkWZNrsse7EBtT2lPamdVbLWot2ltfHvII6n9XwrcgFuOI5UBIWq2rnO+y0D6av4VDdcq19Tp6bptmZYkuPUbegtCru+486hUe2tnG8OCnj1A/jVOuuV0uqZ6HM1CnTK/Ax18Q6IkOLbYaGIzbbMdocEjgB4/510YxUVsjx1ls7pOc3u2eY15tckgRrlDeJ5BuQhWfkayaGaVUBXNAVoAoAoAoAoAoC1JfbjMuPPrShttJUpRPAAdaA5S2naxc1dqNchJIgR8tRGyeSeqvern8B2oDT8E0BsemLWt5xMhTZWSvdZT7Sqp5Vr26I8npNDwIy3ybvKjpXQumkWC1guJBmv4U+rsfZHgKlx6fDic7VdQlm3tryrg2ORJZisLekOJaabGVrWcBIqc5gh9pG2CRLU9bdKOqYj8UuThwW59Q/ojx59sUAn1rU4d5XFR4k9T76A84+GKAz4tqlyGS6hr0QM8eGaildCL23OhTpmTbDxIx7GEr0FEcz4jlUpQf1HJsK1uth/8m7m+S04cwlrPqK6o9x5im5lRb4HynlQ1AqwaATm1/acIPlbDp6QPOj6MqUg58kOqUn2u56UAhVrJUSTnjxz1oC5FjrlPBppJKlVrOSjHdk+PRO+xVw5GVoXR7t0liJDBSkYVKkkcEjt7/Cuc3LJn9D2H+30XH3X5jH1ChwNOWgNslEeJHQVLWsge9RPeujCKgtkeOyL7Mix2WPds582rbR39UyFWy3KU1ZWl5wOBkqH6Sv1c8k/E9MbEIuOdASNptq5znstD1lVDdaq135OnpunTzbNv0jj2eaFRdUtyZqFNWtv1GwMF8jx7ffVSqmVr65ne1HUoYNSxcbzer+X/AGOVtpqMylDaEIbbTgJSAAkCugkvQ8fJuUnJvuIXbDtKXc3HdP2J3EBJKZUhJ4vnqhJ9nv35cs5yYFCCQcpyn3UBvWzjU95tF4jbtxlG1NuDzqOpZW2U+CTwB8RxqOy2NfJdw9Puy5NVLg6bt0xm4QmZkVW8y8kLQruK3T3W5VsrlXJwlyjIU4EAlXAAZJJxWTQh42rtOynizHvUFxwK3SkPDOe1ATCHUOJCm1JWk/pJORQHoEGgK0BQnFAJLbvrcoP5L213ClAKnLSrkOiPjzPw70AjFEqVk0Bm2qEqbJDY4J5rV2FR22KuPUXtPwpZl6rXHqPnZNpdLhTeJTOGGSUREEcCeqvcOQ8cmquNX1vxJHc1zMjTBYdPZLn/AODQnS48CI7KlvtsMMpKnHXDgJA71ePKnNe03aRK1XIchwSpiztqO4jOFP45KX+CelAL7ORg0B7ZaW64ENpKlHgAKw3t3ZvCuU5dMeTarFptbj7SS0qTKcP0bLY3sfD+RVC3IlJ9NZ6zC0arHgr8tm8agtMPRNiE6/KS/c5CSmHAQfRSfaX3A+XvqSrFS+KfJV1DXpT3qxvhiJt1W+rePM8TgYq4ea5JLTqXBc2nGyUlsFYUOhHI/Ooch9MDqaNV4uXGO3b1OvbLKXKs0GS5u770dDiunpFIJqSD3iihfBQtlFejYqtru1AQfLWLTjwMk+jKloP9X3Sk9+56VsRCEWsqUSTknqetAem21OKASkkqOAB1NH2W7NoRc5KK5YwNGaWkzpLUSKnMlzi64eTSepP88a5tkpX2dK4PZ4tNWk4vjW95P/2x0Ba4Ft0nZC2laGYzCC48+4QMkc1KNX661CPSjyWVk2ZVrtsff/Ag9qG0p/VTqoFsK2LQ0rgCMKkH2lDoOwrcri5zvHjQGXboLk6QG2+AHrK7CtLLFXHdlzCwrMu3w4Dg2caKF3cS482U2xg8cnBeV293eqNVcrpdc+D1Go5dWmULFo83+B3tNIYQlDSQhCRhKRwAroJeh4xtttv1Evtm2leTLum7C99J6s2Sg+r/ALtPj3Pw55xkwIz1vhQGbbIDk54IHooHrL7VFbaq1uy9g4M8yzphx6ja2e6IF4WHFNqatbK/TXni8r2R+JqnXXK+XVLg9NnZlOlVe746+L1HiwhmJHS02EtNNJwByCQK6KW3Y8Y5Sk+qXLERtY2pf6U8rZdNPFMMZTImJOPL/qo/U58evThxIwJ7e48h8qAn9Paj1HapCE2W4ym1HGGwveSfgeGK1ckluyWmmd0+itbs6j0pf49/tKJLK/pkYQ+jdxurxx4dqxXZGxbo3y8S3Fn0WrZk/W5XNY2iaqZ0jpt+espVJWPJxWj+m4eXwHM0ByXMlSJkl2RLdU6+6srcWrmpR4kmgLSE72ABkk0MpNvZDL2f6WXcpzMAAje9OSsfoo7VzZN327Lg9lUo6TguyXnkdGRIzMKI2xHQG2WkhKUjkAK6KSXB46c3OXU+TnTbDr9eoLg5aLcsptkVZCyDjy6x1PgOlZNRZZKjx686AyIcVyU+lplO8o/IDxrWclFbsnx8ezIs6K1uxgaP0jInShFgNhx3gXXleq2O/wDlXPc55EtlwexrpxdHp8SzvMaM6Tp/ZdZDIdw/cHhhAJHlHleHspHertVMa12PLZ2o3Zs+qb7fI5/1RqG4alurtyuT2+4s4Qgeq2nokVKUCOix3JTqWkJJJ4DHSsSkox3ZPj0TyJquC7sYmidIP3OUmHGBAwDIkHk2n+elc5uWRPZcHr1GnR8ZuXebNj2mbUERWF6e0o8N1tAZfmtngkAY3UH4cVV0UtlseLnJzk5P1Ek4olZOd7Jzx45rJqeQMnlQykbdpSyPPvMltkuS3yEsNj76oZFrk/Dger0jBhjVPMyPTg6FsVst+idPuPz322ilO/Kkq6nsPDoKs01KuJwtSz55tzm/L6L5CM2nbRZWrpBhwiqPZmlZQ3yL5HJS/wAB/ImKAv8AeJ4UBcYaU86lDYytRwBWJNJbkldbskoR5Y0NA6QcukxEJrg0jC5L46Dt7zXO75Fn0R7Jyr0fE+c5HQMGGxb4jMWI2G2Gk7qEjoK6KiorZHi7LJ2Tc5vuxb7X9ow0/HNmszyTdXU4cdTx83Sf+o/ZWTU50cWpw5WoqVniScnNAZMCGubIDLX7SugHWtLLFWt2W8PFsyrVXBcjX0BotV4dCAlSLc0R5Z0cC4fZFUIQlfLqfB6vKyatIx/BqW82PBCYlpg7v0caKwjmcJShIHeujFbLZHi5zlOTlJ9xBbUtqbl98taLC4tq2cUuvDgqR4eCfvrJqKtSiTz4CgL8SI7LeS2ykqUeeOnvrWc1FbssY+NZkWKutbtjE0Vo+RcZSYkFOTgF+QR6KB/PSudKU8iey4PYRhjaLR1S7zY/NPWCJYLcmJDR13lrUeK1d66NcFWtkePzcqzMs67O5LLUEAlRwAMk9K2K5y1tc1crU+qHAw4TAhEssDofaV8TQGi86Am9OQfLyC8tJKGuI4c1VVyremPSuWd3Q8JXWu2zyw7nTOz3T3+hLKHHkgTJWHHVdQOifhW+PV0R7lfWc/3vIe3lXZG1Oo32VoH6SSPsqc5RxfeorsC8TYb29vsPrQd7nwJ40BahRVy5CGWsZUeZrWcuiO7J8aiV9irjyMrRWjnbm75vFAaYRxky1j0Uj+PYVzvjyJfQ9i542i07LvYza9Q7RLDomAbRpJtqZNTkLdzlCV9VKV+krwH2V0IQUFsjx2Vk2ZNniWvd/wCBI3u7z71PcnXOUuTIcOStfTwA6DwrcgLEKM5NfSy2Mk/IVrOagt2T42PPIsVcOWMDTGmkLQ4oONx4zIzKmvHCG0/Hrz4da5zc8iW3oex2xtFp3fexr/37HjWGvmkQDp7R+9GteCH5RGHZZ68eYT/PKuhXWoLZHkMrKtyrHZYxdqJ4DOQOVblY84zQEhZWWnJzYfICeJ4+FR3N9HY6GmV12ZMVZwPDTrtk0PZ1X6/SW1TXUfm8VshTgSf0Up7nhnoKhxquldT5Ze1vUveJ+DX5UK3XWurrrCYVSXPIQkKyzDQfRR4n2lePyq0cE1L0j1NDOxQc6GDb9G2dyW615u35STIV5NpPbuao5M5Smq4nrNEoqx6Hm2v9jpfS1hj6etTcRrBX6zrnVaupqzVWq47Hns7Mnl3OyX2+hp21PaYxplly22d1D13UMEp4pjg9Vfrdh86lKhzhKlPyn3H5Lq3XnFFa1rOSonrQHllC3VpQgbxJwBWG0u7NoQc5KMeRmaD0m7c5zcFgEJ4LlPgeon+PQVznvfZt6I9nBV6NiuT72S4HbcLrp/RFlQJTzUWO0nDbYOVuHwHMk10IxUVsjx1t07puc33Zz9tF2kT9YuebMhUS1IPoxs+k4einCOfu5DHxrYjNEUSeZoDJgw3ZryW2k5J5noBWk5qC3ZaxMSzKsVda7jL0Pot+6vCNDBbZH9olkcAOw7nwqh8WRL6HrZTx9Fo2Xexj6sdmh2S3ohwGtxpPE8eKj1JPU10IQUVsjx+TkWZFnXN7klitiAXm2rVZ09pkxIrm7PuGWm8HilH6Svw95FAcxHOMdKAuMtqcWlCOKlHAFYbSW5vXBzkkvUcmyjTSZl0bLiN6JBAccOOCnD6o+8/DxqhWvGu6nwj1mdOOm4Cx4P4pcj3SOHKugeQPVAIDb1o5yNcBqWE3mPIwmUEj1F9FHwNBsKWJIXFeS62cLFayipLZk1F06bOuHZk1dNYXe4W5Fu8482goTgR443Er7lWOdIxUVsjF107pudj3ZrxJI4mtiI80BkQZTkR8PMkhQFazipLZk+NkTx7FZDkzrpfrhcWW48iQrzdv1GUeigHvgczw5mkYqK2Ri6+y+bsse7I0JWtXAZJPDhW3ZIjUW+yW5NW6wrdAdm/RN+z1P8KqW5UY9o9z0GBoFtq8S99MS5qXT0uzhiW9Cdjw5QywtYwFY51NTKUoby5OZqVVNN7jS90QBJSogEjFSsogVLUoqUolR5kniaAuMRn5K91lClnwrWU4x5ZLTj23S6a4tk21px5cZYQC5LIylptJUT3wOpqtHKjKfSl2O1boc6MV22y2fyIApx0q2efN12ca1Y0jcS/OhKltFspb3FAKbyeYz7qj8NdXUWXlWPH933+Hfc2fVu26ZcY6omnoq4CFjCpDhCnP2RyFSFYUjrjjqy44tS1qJUVKOSSeZJ6mgPGDQGbaZLMSYl55BUEjhu9D3qO2DnHZF3AvrovVk1vsb/H2pKsVm8w0zCDT7mVPzZABUpX6qR0HjWKalXHY21HOlmXOz09DQLtdp93mKmXGW7IfXnK3FZ+XapSgYOSaAyoEN6Y+ltpOe5PIDxrSyagt2WcXEtyrFXWu7GfoPRrl2kebxQURUcZMoj7B3PhVBKWTLvwj11tmPotHRDvYx9Wm2RbXBaiQmktstjAA6+JroRiorZHjbr532Oyb3bM+tiIKA0HapouPqe3iUlp524xWylhLbmMgkZyOvKtJtpbonxo1yuirXtESUjQc1lwpchXBJB/9OT9oFVPeLfWJ6GOj4Eu6vL9u0fMjvh1m3T3Vp5JVHI4/KtJ3Wz+HpLWPgadiT8V2p7HQGh7ILFp9mMpOJDn0r57rI/DAHwq3RX0Q2POapme95Mprhdl+xslTFAKAw7jAj3GG9EmNJdYeQW1oUOYNYfdGYtxlujnzXOyuZZn3JFuSXYJJIWkZKR2UOnvqFzlX5lujq1UUZi2hLon8nwzSGdPyVK9NxpKPaBzUcsytLsWqfZ3Kk/i2SNo03op26qLEGIZGeC318Ep+NRKy22XwrsdC3A0/ApfjPeTIPVWjLnp66OwXmg4U+khSB6ye4q27VHtI86sG21ddK3RCt2uc4cCMse8YFZd1aXdiGm5cnsoMkounlnjLcShPUJ4mq08yK8p18f2bun3tfSbxpfQU64bpgwS00ecl8cPh3qPa+76I6Ds0zS12+KQ19NaCttmKX5I88ljiFuD0U+4VYqx4Q78nCztayMrsn0x+RK6t05E1NZXrZNACFek2oDi2sciKsPujlVz6Z9Ulv9Dne+7Op9olqaktPhAOA4hveQodwRy+NVZX2Q5id2jS8TJSddu30ZatujlPupSzDlylHkA2cfHwqL3i2faMToQ0fT8f4r7E/uMLT2y+e+lKpvk7ez7COK/4VhY1lj3mzNmt4mJHw8SO7GZYNMWuwtYhRx5Qj0nl8Vq+PT3CrkKoQXZHmsvPyMqW9svsJ7a1s4djTXr3ZWx5q6Sp5sDAbWeZ9xrLk488GMeiOQulP4vRCnct8ts4Uw57wMg0VkHwxPByYPZwZVq2TXSAmO5jxGBR3QXLM14GTY9owZKRNPEkKmObg9lPEmq1mZFdo9ztYns5bL4r3siRvmiblFtSbqzBcbhkhOV8D78djUlVsnHexbFTPwaVd0YstzWkW6YpW4I7gVnqnFTeJH5nPWFk77dDMeQ0WnCgqBI545VsnuitOLhLpZarJqZEOK5KeDTQySflWs5qC3ZPjY08ixVwXdjP0Ho926yPNY4KGEHMmTjl4DxrnrryZfQ9hN06Lj/Oxj8tFrjWmA1DhthDLQwAOp6k+NdCEFBbI8bddO+x2Te7Zn1sRBQBQFCKGCgHChkMUBUCgK0AUAUB5UkEYPEGgIWTpaxSXi9ItENbhOSS0OPv71G6oN7tFuGoZUI9MbHt+5KMR2o7SWmW220JGAhCd0D4VultwVZSlJ7ye5h3exW68shm5xW32xyKshSfcocRWsoRl5luTY+Tdjy6qpbM1j+jDT++VF2clHRvy4wPsz9tQe517nXXtHnJbbr+CVtmldN2lYWxEjh0cnHl76h8VHh8KljRXHhHPv1TMv8APNkuu429n15sZIHd1NSlDuY7mpbEwPpLvBTju+mhkxF630s0Muagtqc/+5TQGOrX2jxkHUNuP/NBoO6Kfl/o5scNQW/4Oig3bKDaLpD/AGgg/vihguf0h6P/ANoYH/2ihkDrvSDqSFagtZBGCFPpoE2u6NZuNo2e3V1bse9xYjijlXmkpASSf1TkD4YqvPFrl3SOvja5l0x6d+pfXueIuhNJrKVflA68nsl9oZ/w1p7lD6lqXtLl7bKMV9jarNpjTVrV5WAxHU6eTrjnlVfAk8PhU0KK4cI5mTqeXk/mS+xOyY7EuOqO+228y4ndWhQBBHYipHFNbMpwnKD6ovZiH2vxbFplxuHaHH0z3xvLZ8qFIZb7nI3snoM1AsaCludWWuZk6XXLZ/UUSyCc9c1YOS3uemGlvOJbaSStRwBWG0luzequVs1CPLGPobSci4SkwYvBSsKkP49FtP8APL41z5dWRPpXB7OuFGjY3iT72M6Eslni2a3tQoSN1psfFR6k+Jq/CChHZHjsjIsyLHZPlklWxCFAFAFAFAFAGRQFM0BH3C+Wm2DNyucKJ28vIQjPzNAa3cNqmioRKHL226odI7S3PtAx9tAa/O256ZZSfM4lwkKHL6NKAfiT+FAQczb8Ck+Y2HCscPLSMj7BQEJL27aieH5tCgx/gV/fQERJ2w6ykf35pr/hMAUBFSNomrpAPlb9MwTnCSB9woCLf1HfZJy7eJ5/+QofcaAw3Z854fTTJDn13SfvNAYxB60AYoCmKbAMCgCgK8e9AUxQBimwDFAVxQF5mRIZ4MvOt/UWRQGdH1BemFBTN3moI5fnC8ffQGFNmSJ8lcmY8t99frOOKypXQZoDHoCRtVwTAUpZZS4o8AScYqG2rxFtudLT89Yc+vp3Y4dEbVdJ2W2NxHoE6O4Tl10JS7vq7k8OHhW1Varj0ogzcy3LtdkxiWvaPo+6boj36I2pXAIkHyJz+3ipCobQ06h1AW0tLiDyUk5BoD3kUBWgCgNBum13R8A7qbguWvGQI6CofPlQGnXPb60nKbVZFq7Kku7uPgM0BqFz2zaumhSY78eEk8vIMgkfFWaA1a5as1DdCoz71OdCuBQXyEn9kYH2UBChOedAGDQBg96AAgk4AJPYUMpNvZF9uDKc9SO6f2cVq5xXLJ4Yl8/LB/wZbVjnucmd36xFRPIrXqXYaNmz4gZCNOyz67jSR781G8utcFyHs3mPu9kX29NjOFyk5PRKa099XoizH2Zn+uxIz2NGuuj0I8536jBI+6se92PiJv8AgWFDz3L+SUY2dT3Mbtpmqz3G799PFyH6GHg6RDzW7kixssuquVkWkf7x0fxrHVksOOhw9d/5M5rZLdiBi2xE/Wep05L9QsrRI/02ZTeyG6H141vR+3n8Kz4V/wDcYefo64qL6NkNw5EW8D3ZrPg3/wBxr+K6YuKT3/RBO9q3/uU8G7+4fiunf8JT+h+d7UD9yng3/wBxj8V03/hLK9j9w/8AKt5/aNPBvX6jP4jpL5pMV3ZDdMn8yhKHcPEU6cheoeTosv6bRgv7JbqjOLXvf8N4U3yUar8Em+7aIuZs0uUZCnHbZLaQkZUSUkAfOtlbf6ow8PSJeW3/ACaFJDSXVBlW83n0TVqO+3c89dGEZtQe6LGCTWxEZrdqmOtBxtkqSRkEYqN3QT2bL1em5VkPEhBtFh6JIZGXWHEjuU8K2U4vhkFmNdW9pxaLOK2ICuOHOgM+1Xu62dwLtVxlxVA5wy6Ug+8cjQG+2LbXqa3lKLiGLk0OflE7i/3hw+ygGTp3bNpm57rc9TttePPy4yjP1hQDDhzY02OmRDfbfZVyW2oKBoDidST3oH2KoaWvghJUfAUbSNlCUuEZDVsmO+owv4jFRu2C5Zbr07Ks8sGZrWnpqxlZbbH6yqieXUjoVez2bPlJGZH0wpasGQVHs03monm7+WJdh7NOPe2xImoOgpMnBYt0+QD13SBWPHvlwiR6XpVP5tu5scLZXdnAN21MND2nnBWHDJl6j3jRKfLHc2CHsmuBx5edDjp7NtlePurKxbH5pB+0GLWtqqv8E1G2TQxjzm6yl9w2hKB9ua2WFH1ZXn7TX/ogkSsfZppxnHlGH3yOrj6vuGKkWJUvQp2e0GfPiWxKMaN07Hx5O0RCR1W3vH7akVNa9CnPUsufmsZJs2+KwN1mKyhPZKAK3UIrhFWVtku7bf3MgNpT6qUj3Cs7GjbfqVCTWTUN2gK4oZDFAGKwAxWQGKACKGAxWNjIEcKAU23XV5tVoRYoTu7Mnp3nsHi2z/mRj3A1nsNvqc9FQIAGcismeTPs0AzZOFj6JHFZ/CoL7fDidLS8GWXelt2Q9NnmhY9xgrnXlgmO4NyOwFFPo+2SPs/zqtRQp7yn6nZ1XVpY0lj4r26TYJmyyyPf2d+bG8EuBY/xA1K8St8FCHtDlrzpS/c1q6bHVqJMWXFf48n2dw/ME1r4FkPLIl/FsO78+hfY0277KLvE3lJgO7vtR1BwfLnTxLo92tx7vpGR+XNwf1NQnaWnRFlKuChyDiSg/bW6yl+pEM9Dta3pmpr6ES/AksE+WaWPHGRU0bIS4ZzLsO+l7Tg0WMHlW5WJayXS8W7eFmny4yiPSDDpTw9wrWUlFbslppstk1AZp2S3dp3dRAhrGfXDvD7RmqbryH+o9JXmaPBdXR3J2Bsmmnd85nRWB1DLZUfnwrVYk2/ikSP2gxa/yaifibK7U2PzqZKf8MhP3VIsOHqVLPaXKa2gkiaiaE07E3Si3NrUnkXSVH7amjj1r0Ofbq+bb5psmo9shRh9BEYb+q2BUihFehQlbZPzSZlbv/atjQN3jnNAGKA9UAUAUAUAUAUAUAUAUAUAUAUAUAUBZmSWocR6S+SGmW1OLIGcJAyaA491bfJGpr9Mu8nIVIcJbRnO42OCUj3DHxzQzsRLbS1LShI9NRwB1NOFuZhFykox5Gvs40l/pSY1HUPzZrC5a+/ZPxrnL/Xs3fCPZWyjo+EoR88joJlpDSEttgJQkYSByAroLstjxjbb3ZdrJg84oYDdoNjGl2+NMTuSmGnUdloBrDinySQssre8HsazdNnNhmhRaZVEWRzYOB8jwqGWPB8djp061lVrpk+pfU0S/bHHzlUF6PJA6KHk1/McDWnh2wfwvdFr37T8hbX19L+aNbh6FvVuedZYss1Tp4lRRkY8DyqtarrHs0dXCnpWJByjPfc6O3a6Z4oqBQFaAKAKAKAKAKAKAKAKAKAKAKAKAKAKAKAKAKAKAKAoQelAKTWuys3W6SLjbmohS8QfIhHkt04x04HPPPMk1WnG3feDOth5GB4fRkQ+65NQb2ZXiBJDjdpcWvkMOAgeNQ2e8SXSzs4lmj0TVsJPdfMdejrAiwWduJgF9R331+0s/wAOVWqa1CKR53UMyWZfKx8ehPpGKlKRWgCgCgCgA0B5Kc1jYxsUKKyZPdAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAeMcqxuNtmU6HwNZNd+zBPOsbmd/QuVkyFAFAFAFAFAFAFAf/Z"
                                className="h-6 w-15 object-contain"
                                alt="Tally"
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
                                className="h-6 w-15 object-contain"
                                alt="SAP"
                            />

                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
                                className="h-6 w-15 object-contain"
                                alt="Oracle"
                            />

                        </div>

                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section id="features" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold">One place for payroll, attendance and HR</h2>
                        <p className="text-gray-600 mt-2">
                            Powerful features designed for Indian payroll rules & global teams,
                            with clean UX and deep integrations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                        <FeatureCard
                            title="Automate payroll"
                            desc="Run monthly payrolls in minutes — multi-level approvals, bank advice and bulk payouts."
                            icon={<Settings className="w-8 h-8 text-yellow-500" />}
                        />
                        <FeatureCard
                            title="Attendance & leave"
                            desc="Track in/out punches, missed punch workflows, on-duty & permission — native calendar sync."
                            icon={<Users className="w-8 h-8 text-blue-500" />}
                        />
                        <FeatureCard
                            title="Compliance & reports"
                            desc="Auto-generate TDS forms, Form 16, PF/ESI reports and ready-to-file statutory reports."
                            icon={<Shield className="w-8 h-8 text-red-500" />}
                        />
                    </div>
                </div>
            </section>

            {/* INTEGRATIONS */}
            <section id="integrations" className="py-20 px-6 bg-white/40 backdrop-blur-xl">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <h3 className="text-3xl font-bold text-gray-900">Integrations & API</h3>
                        <p className="text-sm text-gray-600">
                            Seamlessly connects with HRMS, accounting, banks & automation tools
                        </p>
                    </div>

                    {/* Logos Grid */}
                    <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

                        {/* Tally */}
                        <div className="bg-white/70 border border-white/40 rounded-2xl p-5 shadow-lg flex items-center justify-center 
                      transition-all duration-300 hover:shadow-2xl hover:bg-white hover:scale-[1.03]">
                            <img
                                src="data:image/jpeg;base64,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"
                                className="h-10 object-contain"
                                alt="Tally"
                            />
                        </div>

                        {/* SAP */}
                        <div className="bg-white/70 border border-white/40 rounded-2xl p-5 shadow-lg flex items-center justify-center 
                      transition-all duration-300 hover:shadow-2xl hover:bg-white hover:scale-[1.03]">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
                                className="h-8 object-contain"
                                alt="SAP"
                            />
                        </div>

                        {/* Razorpay */}
                        <div className="bg-white/70 border border-white/40 rounded-2xl p-5 shadow-lg flex items-center justify-center 
                      transition-all duration-300 hover:shadow-2xl hover:bg-white hover:scale-[1.03]">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg"
                                className="h-8 object-contain"
                                alt="Razorpay"
                            />
                        </div>

                        {/* Oracle */}
                        <div className="bg-white/70 border border-white/40 rounded-2xl p-5 shadow-lg flex items-center justify-center 
                      transition-all duration-300 hover:shadow-2xl hover:bg-white hover:scale-[1.03]">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
                                className="h-8 object-contain"
                                alt="Oracle"
                            />
                        </div>

                    </div>

                </div>
            </section>


            {/* TESTIMONIALS */}
            <section id="testimonials" className="py-15 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold">Loved by teams & finance leaders</h2>
                    <p className="text-gray-600 mt-2">Hear from customers who've saved hours on payroll</p>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Testimonial
                            quote="Switching to E-Payroll saved us 80% of our payroll time. Integration was painless."
                            name="Gnana Jayanthi"
                            title="Associate manager, KRG Technologies"
                        />
                        <Testimonial
                            quote="Payslips and statutory filings are automated — huge relief for finance."
                            name="Shahid"
                            title="Finance manager, EasyOut"
                        />
                        <Testimonial
                            quote="Great support and the attendance calendar matches our workflows perfectly."
                            name="Anjali Raval"
                            title="People Manager, Ecotech"
                        />
                    </div>
                </div>
            </section>

            {/* CTA / PRICING TEASER */}
            <section id="pricing" className="py-20 px-6 bg-yellow-50">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold">Ready to automate payroll?</h2>
                    <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
                        Start with a free trial or request a demo — no hidden fees.
                    </p>

                    {/* <div className="mt-8 flex justify-center gap-4">
                        <a href="/register" className="px-6 py-3 rounded-full bg-black text-white shadow">Start Free Trial</a>
                        <button onClick={() => setDemoOpen(true)} className="px-6 py-3 rounded-full bg-yellow-100">Request Demo</button>
                    </div> */}

                </div>
                <PricingPage />
            </section>

            {/* FOOTER */}
            <footer className="py-10 text-center text-gray-600 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>© {new Date().getFullYear()} E-Payroll — All rights reserved.</div>
                    <div className="flex gap-4">
                        <a href="#" className="text-sm hover:underline">Privacy</a>
                        <a href="#" className="text-sm hover:underline">Terms</a>
                        <a href="#" className="text-sm hover:underline">Contact</a>
                    </div>
                </div>
            </footer>

            {/* DEMO MODAL */}
            {demoOpen && (
                <DemoModal onClose={() => setDemoOpen(false)} />
            )}
        </div>
    );
}

/* --- small subcomponents --- */
function FeatureCard({ title, desc, icon }) {
    return (
        <div className="bg-white/85 rounded-3xl p-6 shadow-md border border-white/60">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center">{icon}</div>
                <div>
                    <h4 className="font-semibold">{title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{desc}</p>
                </div>
            </div>
        </div>
    );
}

function Testimonial({ quote, name, title }) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-md border border-white/60">
            <p className="text-gray-700">“{quote}”</p>
            <div className="mt-4">
                <div className="font-semibold">{name}</div>
                <div className="text-xs text-gray-500">{title}</div>
            </div>
        </div>
    );
}

function DemoModal({ onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center">
            <div className="absolute inset-0 bg-black/30" onClick={onClose} />
            <div className="relative mt-20 w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6">
                <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold">Request a demo</h3>
                    <button onClick={onClose}><X className="w-5 h-5 text-gray-500" /></button>
                </div>

                <form className="mt-4 grid grid-cols-1 gap-3">
                    <input placeholder="Full name" className="w-full px-3 py-2 rounded-md border border-gray-200" />
                    <input placeholder="Work email" className="w-full px-3 py-2 rounded-md border border-gray-200" />
                    <input placeholder="Phone" className="w-full px-3 py-2 rounded-md border border-gray-200" />
                    <select className="w-full px-3 py-2 rounded-md border border-gray-200">
                        <option>India</option>
                        <option>United Arab Emirates</option>
                        <option>United States</option>
                    </select>

                    <div className="flex justify-end gap-2 mt-2">
                        <button type="button" onClick={onClose} className="px-4 py-2 rounded-md">Cancel</button>
                        <button type="button" onClick={onClose} className="px-4 py-2 rounded-md bg-black text-white">Request demo</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
