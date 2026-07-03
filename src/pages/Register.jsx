import PublicLayout from '../layouts/PublicLayout';

const Register = () => {
    return(
        <PublicLayout>
            <h2> Register Form </h2>
            <form className="flex flex-col justify-center max-w-lg mx-auto px-4 space-y-6 mt-2 bg-blue-200 ">
         

         <div>
            <label htmlFor="full-name-large" className="mb-2 text-slate-900 font-medium text-lg inline-block">First Name
               </label>
            <input type="text" id="full-name-large" placeholder="Enter first name"
               className="px-3.5 py-3 text-base text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
         </div>

         <div>
            <label htmlFor="full-name-xl" className="mb-2 text-slate-900 font-medium text-lg inline-block">Last Name
               </label>
            <input type="text" id="full-name-xl" placeholder="Enter task description"
               className="px-4 py-3.5 text-base text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
         </div>

         <div>
            <label htmlFor="full-name-xl" className="mb-2 text-slate-900 font-medium text-lg inline-block">Email
               </label>
            <input type="email" id="full-name-xl" placeholder="Enter email"
               className="px-4 py-3.5 text-base text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
         </div>

         <div>
            <label htmlFor="full-name-xl" className="mb-2 text-slate-900 font-medium text-lg inline-block">Password
               </label>
            <input type="password" id="full-name-xl" placeholder="Enter password"
               className="px-4 py-3.5 text-base text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
         </div>
         
               <div>
                  <button className="btn btn-neutral btn-outline border-t-neutral-900 bg-green-600 py-2 px-2">Save</button>
               
               </div>         
      </form>
        </PublicLayout>
    )
}

export default Register;