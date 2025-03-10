import { SERVICES } from "../constans/index";
import { useForm, SubmitHandler } from "react-hook-form";
import FormBtn from "./FormBtn";


interface IFormInput {
  firstName: string;
  lastName: string;
  message: string;
  email: string;
  service: string;
  date: string;
  time: string;
}


function BookingForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();


  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log("Sending data to server:", data); // Debug log


    try {
      const response = await fetch("http://localhost:5000/send-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });


      const result = await response.json();
      console.log("Server response:", result);


      if (response.ok) {
        console.log("Email sent successfully!");
      } else {
        console.error("Failed to send email:", result.message);
      }
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium">
            First name
          </label>
          <input
            {...register("firstName", {
              required: "First name is required",
              maxLength: {
                value: 30,
                message: "Name cannot exceed 30 characters",
              },
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: "Name can only contain letters and spaces",
              },
            })}
            type="text"
            id="firstName"
            className="mt-1 block w-full px-3 py-2 border bg-primary border-stone-700 text-sm rounded-md focus:ring focus:ring-blue-500"
            placeholder="Elon"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium">
            Last name
          </label>
          <input
            {...register("lastName", {
              required: "Last name is required",
              maxLength: {
                value: 30,
                message: "Last name cannot exceed 30 characters",
              },
              minLength: {
                value: 3,
                message: "Last name must be at least 3 characters",
              },
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: "Last name can only contain letters and spaces",
              },
            })}
            type="text"
            id="lastName"
            className="mt-1 block w-full px-3 py-2 border bg-primary border-stone-700 text-sm rounded-md focus:ring focus:ring-blue-500"
            placeholder="Musk"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border bg-primary border-stone-700 text-sm rounded-md focus:ring focus:ring-blue-500"
            placeholder="elonmusk@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium">
            Services
          </label>
          <select
            {...register("service", { required: "Please select a service" })}
            id="service"
            className="mt-1 block w-full px-3 py-2 border bg-primary border-stone-700 text-sm rounded-md focus:ring focus:ring-blue-500"
          >
            <option value="">Choose a service</option>
            {SERVICES.map((service, index) => (
              <option key={index} value={service.name}>
                {service.name} - {service.price} ({service.duration})
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-red-500 text-sm mt-1">
              {errors.service.message}
            </p>
          )}
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium">
            Date
          </label>
          <input
            {...register("date", {
              required: "Date is required",
              validate: (value) => {
                const selectedDate = new Date(value);
                const dayOfWeek = selectedDate.getDay();
                return (
                  (dayOfWeek >= 1 && dayOfWeek <= 6) ||
                  "Bookings are only available Monday to Saturday"
                );
              },
            })}
            type="date"
            id="date"
            min={new Date().toISOString().split("T")[0]}
            className="mt-1 block w-full px-3 py-2 border bg-primary border-stone-700 text-sm rounded-md focus:ring focus:ring-blue-500"
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="time" className="block text-sm font-medium">
            Time
          </label>
          <input
            {...register("time", {
              required: "Time is required",
              validate: (value) => {
                const [hours, minutes] = value.split(":").map(Number);
                if (isNaN(hours) || isNaN(minutes))
                  return "Invalid time format";
                return (
                  (hours >= 9 && hours < 18) ||
                  "Time must be between 09:00 and 18:00"
                );
              },
            })}
            type="time"
            id="time"
            className="mt-1 block w-full px-3 py-2 border bg-primary border-stone-700 text-sm rounded-md focus:ring focus:ring-blue-500"
          />
          {errors.time && (
            <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
          )}
        </div>
      </div>


      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
            maxLength: {
              value: 500,
              message: "Message cannot exceed 500 characters",
            },
          })}
          id="message"
          rows={4}
          className="mt-1 block w-full px-3 py-2 border bg-primary border-stone-700 text-sm rounded-md focus:ring focus:ring-blue-500"
          placeholder="Enter your message"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>


      <FormBtn />
    </form>
  );
}


export default BookingForm;
