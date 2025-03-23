import { SERVICES } from "../constans/index";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Toaster, toast } from "sonner";

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
    formState: { errors, isSubmitting },
    handleSubmit,
    setError,
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log("Sending data to server:", data); // Debug log

    try {
      const response = await fetch("https://the-brothers-cut-backend.vercel.app/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Server response:", result);

      if (response.ok) {
        toast.success("Email sent successfully! 🎉");
        reset(); // Rensar formuläret
      } else {
        setError("root.serverError", {
          message: result.message || "Failed to send email",
        });
        toast.error(`Failed to send email: ${result.message}`);
      }
    } catch (error) {
      console.error("Error sending request:", error);
      setError("root.serverError", {
        message: "Network error: Could not send email",
      });
      toast.error("Network error: Could not send email");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-6 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
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
            className="mt-1 block w-full invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 px-3 py-2 border bg-primary border-stone-700 text-sm rounded-md focus:ring focus:ring-blue-500"
            placeholder="Elon"
          />
          <p className="text-red-500 text-sm absolute">
            {errors.firstName?.message}
          </p>
        </div>
        <div className="relative">
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
            className="mt-1 block w-full invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 px-3 py-2 border bg-primary border-stone-700 text-sm rounded-md focus:ring focus:ring-blue-500"
            placeholder="Musk"
          />
          <p className="text-red-500 text-sm absolute">
            {errors.lastName?.message}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
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
            className="mt-1 block w-full invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 px-3 py-2 border bg-primary border-stone-700 text-sm rounded-md focus:ring focus:ring-blue-500"
            placeholder="elonmusk@email.com"
          />
          <p className="text-red-500 text-sm absolute">
            {errors.email?.message}
          </p>
        </div>
        <div className="relative">
          <label htmlFor="service" className="block text-sm font-medium">
            Services
          </label>
          <select
            {...register("service", { required: "Please select a service" })}
            id="service"
            className="mt-1 block w-full invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 px-3 py-2 border bg-primary border-stone-700 text-sm rounded-md focus:ring focus:ring-blue-500"
          >
            <option value="">Choose a service</option>
            {SERVICES.map((service, index) => (
              <option key={index} value={service.name}>
                {service.name} - {service.price} ({service.duration})
              </option>
            ))}
          </select>
          <p className="text-red-500 text-sm absolute">
            {errors.service?.message}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
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
            className="mt-1 block w-full invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 px-3 py-2 border bg-primary border-stone-700 text-sm rounded-md focus:ring focus:ring-blue-500"
          />
          <p className="text-red-500 text-sm absolute">
            {errors.date?.message}
          </p>
        </div>
        <div className="relative">
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
            className="mt-1 block w-full invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 px-3 py-2 border bg-primary border-stone-700 text-sm rounded-md focus:ring focus:ring-blue-500"
          />
          <p className="text-red-500 text-sm absolute">
            {errors.time?.message}
          </p>
        </div>
      </div>
      <div className="relative">
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
          className="mt-1 block w-full invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 px-3 py-2 border bg-primary border-stone-700 text-sm rounded-md focus:ring focus:ring-blue-500"
          placeholder="Enter your message"
        />
        <p className="text-red-500 text-sm absolute">
          {errors.message?.message}
        </p>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`flex items-center justify-center gap-2 w-full text-center text-black text-base font-bold uppercase tracking-widest bg-secondary px-5 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
          ${
            isSubmitting
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-yellow-200 transition ease-linear"
          }`}
      >
        {isSubmitting ? (
          <>
            <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
          </>
        ) : (
          "Send Message"
        )}
      </button>
      <Toaster richColors position="top-right" />
    </form>
  );
}

export default BookingForm;
