import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const [data, setData] = useState("");
  const { register, handleSubmit } = useForm();
  return (
    <div className="h-[800px]  flex justify-center items-center">
      <h2 className="text-4xl">login </h2>
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email")}
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="password"
            {...register("password")}
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import Header from "./Header";

// export function App() {
//   const { register, handleSubmit } = useForm();
//   const [data, setData] = useState("");

//   return (
//     <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
//       <Header />
//       <input {...register("firstName")} placeholder="First name" />
//       <select {...register("category", { required: true })}>
//         <option value="">Select...</option>
//         <option value="A">Option A</option>
//         <option value="B">Option B</option>
//       </select>
//       <textarea {...register("aboutYou")} placeholder="About you" />
//       <p>{data}</p>
//       <input type="submit" />
//     </form>
//   );
// }
