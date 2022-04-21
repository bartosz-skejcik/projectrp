import { changes } from "../config/changes.js";

function Changelog() {
  return (
    <section className="w-full px-5 md:px-[20%] mt-10">
      {/* create a change log component 
      the changes are mpped from an array imported from a file and is styled with tailwind css*/}
      <div className="flex flex-wrap justify-center w-full">
        <div className="flex flex-col break-words bg-zinc-900 border-2 border-gray-200 rounded-xl shadow-md w-full">
          <div className="font-semibold bg-zinc-900 text-gray-200 rounded-t-xl py-3 px-6">
            Changelog
          </div>
          <ul className="w-full text-gray-200 bg-primary rounded-b-xl">
            {/* map the changes from the array imported from a file the object in an array has a date, title and description if the index of the change is greater than 5 stop displaying more changes*/}
            {changes.map((change, index) => {
              if (index > 4) {
                return null;
              } else {
                return (
                  <li className="flex items-center px-6 py-3 border-t-2 border-gray-200">
                    <div className="w-1/3">
                      <span className="font-bold">{change.date}</span>
                    </div>
                    <div className="w-2/3">
                      <span className="font-bold">{change.title}</span>
                      <p className="text-sm">{change.description}</p>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Changelog;
