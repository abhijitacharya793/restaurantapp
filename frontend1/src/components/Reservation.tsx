"use client";
import { useState } from "react";
import { AppButton } from "@/components/AppButton";
import Image from "next/image";

// TODO: Reservation
export function Reservation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [persons, setPersons] = useState("");
  const [timing, setTiming] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
        message: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nPersons: ${persons}\nTiming: ${timing}\nDate: ${date}`,
      }),
    });

    if (response.ok) {
      setStatus("Reservation created!");
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
          <form className="lg:p-20 p-8" onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-col justify-center items-center">
              <p className="w-24 py-1 border-t border-b border-yellow-600 text-sm font-light text-white">
                RESERVATION
              </p>
              <p className="app-header text-3xl pb-3 pt-4 text-white">
                Book your table now
              </p>

              <div className="lg:flex w-full justify-start lg:justify-center">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3 py-2 m-4 border focus:outline-none bg-white text-black transition duration-200 ease-in-out focus:bg-white focus:text-black mb-3"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 m-4 border focus:outline-none bg-white text-black transition duration-200 ease-in-out focus:bg-white focus:text-black mb-3"
                />
              </div>
              <div className="lg:flex w-full">
                <input
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number (Eg. 77163 282492)"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="w-full px-3 py-2 m-4 border focus:outline-none bg-white text-black transition duration-200 ease-in-out focus:bg-white focus:text-black mr-3"
                />
              </div>
              <div className="lg:flex w-full">
                <input
                  type="number"
                  id="persons"
                  name="persons"
                  placeholder="Persons"
                  value={persons}
                  onChange={(e) => setPersons(e.target.value)}
                  required
                  className="w-full px-3 py-2 m-4 border focus:outline-none bg-white text-black transition duration-200 ease-in-out focus:bg-white focus:text-black mr-3"
                />
                <input
                  type="text"
                  id="timing"
                  name="timing"
                  placeholder="Timing (Eg. 12 pm)"
                  value={timing}
                  onChange={(e) => setTiming(e.target.value)}
                  required
                  className="w-full px-3 py-2 m-4 border focus:outline-none bg-white text-black transition duration-200 ease-in-out focus:bg-white focus:text-black mr-3"
                />
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 m-4 border focus:outline-none bg-white text-black transition duration-200 ease-in-out focus:bg-white focus:text-black"
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
