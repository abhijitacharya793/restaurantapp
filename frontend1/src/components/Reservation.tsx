"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { redirect } from "next/navigation";

import { AppButton } from "@/components/AppButton";
import Image from "next/image";

const generateTimeSlots = () => {
  const slots = [
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
    "07:30 PM",
    "08:00 PM",
    "08:30 PM",
    "09:00 PM",
    "09:30 PM",
    "10:00 PM",
    "10:30 PM",
    "11:00 PM",
    "11:30 PM",
    "12:00 AM",
    "12:30 AM",
    "01:00 AM",
  ];
  return slots;
};

// TODO: Reservation
export function Reservation() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [persons, setPersons] = useState("");
  const [timing, setTiming] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [status, setStatus] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const timeSlots = generateTimeSlots();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const button = document.getElementById("book_a_table") as HTMLButtonElement;
    button.disabled = true;

    // VALIDATE INPUTS
    if (
      parseInt(phoneNumber) < 1000000000 ||
      parseInt(phoneNumber) > 9999999999
    ) {
      setStatus("Invalid Phone number.");
      return;
    }
    if (parseInt(persons) <= 0 || parseInt(persons) > 10) {
      setStatus("Please set persons between 1 and 10.");
      return;
    }
    console.log("############# Calling api #############");

    const response = await fetch("/api/send_email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: `Reservation from ${name}`,
        email: email,
        message: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nPersons: ${persons}\nTiming: ${timing}\nDate: ${date}`,
      }),
    });

    if (response.ok) {
      setStatus("Reservation created!");
      router.push("/home");
    } else {
      setStatus("Failed to send reservation request.");
    }
  };

  return (
    <>
      <div className="relative bg-gray-100 min-h-screen flex items-center justify-center">
        <Image
          width={100}
          height={100}
          className="absolute inset-0 object-cover w-full h-full opacity-90 bg-black"
          src="reservation.svg"
          alt="Overlay Image"
        />

        <div className="relative z-10 bg-app-dark-purple lg:p-8 opacity-90 mx-4">
          <form className="lg:p-20 py-8 px-4 mx-4" onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-col justify-center items-center">
              <p className="w-24 py-1 border-t border-b border-yellow-600 text-sm font-light text-white">
                RESERVATION
              </p>
              <p className="app-header text-3xl pb-3 pt-4 text-white">
                Reserve your table
              </p>

              <div className="lg:flex w-full justify-start lg:justify-center gap-4 flex-wrap">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full sm:w-80 px-3 py-2 mb-4 border focus:outline-none bg-white text-black transition duration-200 ease-in-out focus:bg-white focus:text-black"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full sm:w-80 px-3 py-2 mb-4 border focus:outline-none bg-white text-black transition duration-200 ease-in-out focus:bg-white focus:text-black"
                />
              </div>

              <div className="lg:flex w-full justify-start lg:justify-center gap-4 flex-wrap">
                <input
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number (Eg. 77163 282492)"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="w-full sm:w-80 px-3 py-2 mb-4 border focus:outline-none bg-white text-black transition duration-200 ease-in-out focus:bg-white focus:text-black"
                />
                <input
                  type="number"
                  id="persons"
                  name="persons"
                  placeholder="Persons"
                  value={persons}
                  onChange={(e) => setPersons(e.target.value)}
                  required
                  className="w-full sm:w-80 px-3 py-2 mb-4 border focus:outline-none bg-white text-black transition duration-200 ease-in-out focus:bg-white focus:text-black"
                />
              </div>

              <div className="lg:flex w-full justify-start lg:justify-center gap-4 flex-wrap">
                <div className="relative w-full sm:w-80 mb-4">
                  <button
                    type="button"
                    onClick={() => setDropdownOpen((prev) => !prev)} // Toggle dropdown visibility
                    className="w-full px-3 py-2 text-left border focus:outline-none bg-white text-black transition duration-200 ease-in-out focus:bg-white focus:text-black"
                  >
                    {timing || "Select Time"}
                  </button>

                  {dropdownOpen && (
                    <div className="absolute w-full max-h-60 overflow-auto bg-white border border-gray-300 rounded-md shadow-lg mt-1 z-10">
                      <ul className="py-2">
                        {timeSlots.map((slot) => (
                          <li
                            key={slot}
                            onClick={() => {
                              setTiming(slot);
                              setDropdownOpen(false); // Close dropdown after selection
                            }}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                          >
                            {slot}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full sm:w-80 px-3 lg:py-2 mb-4 py-3 border focus:outline-none bg-white text-black transition duration-200 ease-in-out focus:bg-white focus:text-black"
                  required
                />
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <AppButton
                color={"border-white"}
                fill={"bg-white"}
                text={"Book a Table"}
                fontcolor={"text-app-purple"}
                hover_color={"hover:border-app-yellow"}
                hover_fill={"hover:bg-app-yellow"}
                hover_fontcolor={"hover:text-app-purple"}
              />
            </div>
            {status && <p className="text-center text-white mt-4">{status}</p>}
          </form>
        </div>
      </div>
    </>
  );
}
