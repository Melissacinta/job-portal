const JobFunctions = () => {
  return (
    <div className="col-span-1 rounded-[10px] ">
      <div className="flex w-full items-center justify-between">
        <h3 className="text-lg font-medium text-[#010101]">Job Functions</h3>
      </div>
      <div>
        <nav
          className="max-h-screen flex-1 overflow-y-auto pt-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-300"
          aria-label="Directory"
        >
          {Object.keys(directory).map((letter) => (
            <div key={letter} className="relative flex">
              <div className="sticky top-0 z-10 w-7 bg-gray-50 px-6 pt-5 text-sm font-medium text-[#4E5559]">
                <h3>{letter}</h3>
              </div>
              <ul role="list" className="relative z-0 w-[9.375] border-l pt-5">
                {directory[letter].map((person) => (
                  <li key={person.id}>
                    <div className="relative flex items-center space-x-3 px-6  hover:bg-gray-50">
                      <div className="min-w-0 flex-1">
                        <a href="#" className="focus:outline-none">
                          {/* Extend touch target to entire panel */}
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          <p className="text-sm font-medium text-[#4E5559]">
                            {person.role}
                          </p>
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

const directory = {
  A: [
    {
      id: 1,
      role: 'Accounting',
    },
    {
      id: 2,
      role: 'Auditing & Finance',
    },
    {
      id: 3,
      role: 'Admin & Office',
    },
  ],
  B: [
    {
      id: 5,
      role: 'Building & Architecture',
    },
  ],
  C: [
    {
      id: 8,
      role: 'Community & Social Services',
    },
    {
      id: 9,
      role: 'Consulting & Strategy',
    },
    {
      id: 91,
      role: 'Creative & Design',
    },
    {
      id: 92,
      role: 'Customer Service & Support',
    },
  ],
  D: [
    {
      id: 10,
      role: 'Driver & Transport Services',
    },
  ],
  E: [
    {
      id: 11,
      role: 'Engineering & Technology',
    },
    {
      id: 12,
      role: 'Estate Agents & Property Management',
    },
  ],
  F: [
    {
      id: 14,
      role: 'Farming & Agriculture',
    },
    {
      id: 15,
      role: 'Food Services & Catering',
    },
  ],
  H: [
    {
      id: 16,
      role: 'Health & Safety',
    },
    {
      id: 17,
      role: 'Hospitality & Leisure',
    },
    {
      id: 18,
      role: 'Human Resources',
    },
  ],
  L: [
    {
      id: 19,
      role: 'Legal Services',
    },
  ],
  M: [
    {
      id: 21,
      role: 'Management & Business Development',
    },
    {
      id: 22,
      role: 'Marketing & Communications',
    },
    {
      id: 23,
      role: 'Medical & Pharmaceutical',
    },
  ],
  P: [
    {
      id: 24,
      role: 'Product & Project Management',
    },
  ],
  Q: [
    {
      id: 25,
      role: 'Quality Control & Assurance',
    },
  ],
  R: [
    {
      id: 26,
      role: 'Research, Teaching & Training',
    },
  ],
  S: [
    {
      id: 27,
      role: 'Sales',
    },
    {
      id: 271,
      role: 'Software & Data',
    },
    {
      id: 272,
      role: 'Supply Chain & Procurement',
    },
  ],
  T: [
    {
      id: 273,
      role: 'Trades & Services',
    },
  ],
}
export default JobFunctions
