export default function Form() {

   return (
      <form className="flex flex-col justify-center max-w-lg mx-auto px-4 space-y-6">
         

         <div>
            <label htmlFor="full-name-large" className="mb-2 text-slate-900 font-medium text-lg inline-block">Task Title
               </label>
            <input type="text" id="full-name-large" placeholder="Enter task title"
               className="px-3.5 py-3 text-base text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
         </div>

         <div>
            <label htmlFor="full-name-xl" className="mb-2 text-slate-900 font-medium text-lg inline-block">Task Description
               </label>
            <input type="text" id="full-name-xl" placeholder="Enter task description"
               className="px-4 py-3.5 text-base text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
         </div>
         <div>
<div className="bg-white p-6">
  <button className="btn btn-neutral btn-outline border-t-neutral-900">Save</button>
  
</div>         </div>
      </form>
   );
}