const App = () => {
  return (
    <div className="bg-white w-full h-full">
      <div className="flex items-center w-full py-6 px-2 justify-between">
        <span className="size-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </span>

        <h5>Request / Complaints</h5>
        <span className="size-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="icon icon-tabler icons-tabler-filled icon-tabler-bell">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z" />
            <path d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z" />
          </svg>
        </span>
        <span className="size-7 text-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="icon icon-tabler icons-tabler-filled icon-tabler-circle-plus">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14zm8.071 4.071a1 1 0 1 0 -2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0 -2h-2v-2z" />
          </svg>
        </span>
      </div>

      <div>
        <div className="flex items-center px-4  gap-x-2 w-full">
          <div className="flex w-full items-center border px-2  rounded-lg">
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-search">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            </span>

            <input
              type="text"
              placeholder="Search by room No."
              className="p-3 "
            />
          </div>

          <span className="size-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M4 6l8 0" />
              <path d="M16 6l4 0" />
              <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M4 12l2 0" />
              <path d="M10 12l10 0" />
              <path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M4 18l11 0" />
              <path d="M19 18l1 0" />
            </svg>
          </span>
        </div>
      </div>

      <div className="space-y-4 py-4">
        <div className="px-2 py-4 ">
          <div className="flex border text-center  rounded-md border-slate-300 items-center justify-center  w-full">
            <div className="bg-red-500 p-4 rounded-l-md text-white border-r w-full">
              Tasks
            </div>
            <div className="p-4 border-r-2  w-full">In Process </div>
            <div className="p-4 rounded-md  w-full">Closed (1)</div>
          </div>
        </div>

        <div className="w-full px-3 ">
          <div className="px-4 py-4 border-2 space-y-6 rounded-lg ">
            <div className="flex items-center justify-between">
              <div className="text-red-500">High</div>
              <div className="text-center">
                <p className="font-semibold">Clean Room</p>
                <span>Housekeeping</span>
              </div>
              <div>
                <div className="bg-emerald-300 rounded-md p-[6px]">Created</div>
              </div>
            </div>

            <div className="flex items-center  justify-between">
              <div className="text-left">
                <p className="font-semibold">Room No: 344</p>
                <span>Kumar</span>
              </div>
              <div className="text-center">
                <p className="font-semibold">Assign To</p>
                <span>Ajay (Housekeping)</span>
              </div>
            </div>

            <div className="flex items-center w-full  justify-between">
              <div className="p-2 border-2  rounded-l-md w-full text-center">
                <p className="font-semibold">Created</p>
                <span>12:30 PM</span>
              </div>
              <div className="p-2 border-2 rounded-r-md w-full text-center ">
                <p className="font-semibold">Due</p>
                <span>11:00 AM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-3 ">
          <div className="px-4 py-4 border-2 space-y-6 rounded-md  ">
            <div className="flex items-center justify-between">
              <div className="text-red-500">High</div>
              <div className="text-center">
                <p className="font-semibold">Clean Room</p>
                <span>Housekeeping</span>
              </div>
              <div>
                <div className="bg-emerald-300 rounded-md p-[6px]">Created</div>
              </div>
            </div>

            <div className="flex items-center  justify-between">
              <div className="text-left">
                <p className="font-semibold">Room No: 344</p>
                <span>Kumar</span>
              </div>
              <div className="text-center">
                <p className="font-semibold">Assign To</p>
                <span>Ajay (Housekeping)</span>
              </div>
            </div>

            <div className="flex items-center w-full  justify-between">
              <div className="p-2 border-2  rounded-l-md w-full text-center">
                <p className="font-semibold">Created</p>
                <span>12:30 PM</span>
              </div>
              <div className="p-2 border-2 rounded-r-md w-full text-center ">
                <p className="font-semibold">Due</p>
                <span>11:00 AM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-3 ">
          <div className="px-4 py-4 border-2 space-y-6 rounded-md  ">
            <div className="flex items-center justify-between">
              <div className="text-red-500">High</div>
              <div className="text-center">
                <p className="font-semibold">Clean Room</p>
                <span>Housekeeping</span>
              </div>
              <div>
                <div className="bg-emerald-300 rounded-md p-[6px]">Created</div>
              </div>
            </div>

            <div className="flex items-center  justify-between">
              <div className="text-left">
                <p className="font-semibold">Room No: 344</p>
                <span>Kumar</span>
              </div>
              <div className="text-center">
                <p className="font-semibold">Assign To</p>
                <span>Ajay (Housekeping)</span>
              </div>
            </div>

            <div className="flex items-center w-full  justify-between">
              <div className="p-2 border-2  rounded-l-md w-full text-center">
                <p className="font-semibold">Created</p>
                <span>12:30 PM</span>
              </div>
              <div className="p-2 border-2 rounded-r-md w-full text-center ">
                <p className="font-semibold">Due</p>
                <span>11:00 AM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-3 ">
          <div className="px-4 py-4 border-2 space-y-6 rounded-md  ">
            <div className="flex items-center justify-between">
              <div className="text-red-500">High</div>
              <div className="text-center">
                <p className="font-semibold">Clean Room</p>
                <span>Housekeeping</span>
              </div>
              <div>
                <div className="bg-emerald-300 rounded-md p-[6px]">Created</div>
              </div>
            </div>

            <div className="flex items-center  justify-between">
              <div className="text-left">
                <p className="font-semibold">Room No: 344</p>
                <span>Kumar</span>
              </div>
              <div className="text-center">
                <p className="font-semibold">Assign To</p>
                <span>Ajay (Housekeping)</span>
              </div>
            </div>

            <div className="flex items-center w-full  justify-between">
              <div className="p-2 border-2  rounded-l-md w-full text-center">
                <p className="font-semibold">Created</p>
                <span>12:30 PM</span>
              </div>
              <div className="p-2 border-2 rounded-r-md w-full text-center ">
                <p className="font-semibold">Due</p>
                <span>11:00 AM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-3 ">
          <div className="px-4 py-4 border-2 space-y-6 rounded-md  ">
            <div className="flex items-center justify-between">
              <div className="text-red-500">High</div>
              <div className="text-center">
                <p className="font-semibold">Clean Room</p>
                <span>Housekeeping</span>
              </div>
              <div>
                <div className="bg-emerald-300 rounded-md p-[6px]">Created</div>
              </div>
            </div>

            <div className="flex items-center  justify-between">
              <div className="text-left">
                <p className="font-semibold">Room No: 344</p>
                <span>Kumar</span>
              </div>
              <div className="text-center">
                <p className="font-semibold">Assign To</p>
                <span>Ajay (Housekeping)</span>
              </div>
            </div>

            <div className="flex items-center w-full  justify-between">
              <div className="p-2 border-2  rounded-l-md w-full text-center">
                <p className="font-semibold">Created</p>
                <span>12:30 PM</span>
              </div>
              <div className="p-2 border-2 rounded-r-md w-full text-center ">
                <p className="font-semibold">Due</p>
                <span>11:00 AM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-3 ">
          <div className="px-4 py-4 border-2 space-y-6 rounded-md  ">
            <div className="flex items-center justify-between">
              <div className="text-red-500">High</div>
              <div className="text-center">
                <p className="font-semibold">Clean Room</p>
                <span>Housekeeping</span>
              </div>
              <div>
                <div className="bg-emerald-300 rounded-md p-[6px]">Created</div>
              </div>
            </div>

            <div className="flex items-center  justify-between">
              <div className="text-left">
                <p className="font-semibold">Room No: 344</p>
                <span>Kumar</span>
              </div>
              <div className="text-center">
                <p className="font-semibold">Assign To</p>
                <span>Ajay (Housekeping)</span>
              </div>
            </div>

            <div className="flex items-center w-full  justify-between">
              <div className="p-2 border-2  rounded-l-md w-full text-center">
                <p className="font-semibold">Created</p>
                <span>12:30 PM</span>
              </div>
              <div className="p-2 border-2 rounded-r-md w-full text-center ">
                <p className="font-semibold">Due</p>
                <span>11:00 AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
