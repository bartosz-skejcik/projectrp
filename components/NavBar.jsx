/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

let navigation = []

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavBar = ({ color, list, target, link }) => {
  navigation = list
  return (
    <Disclosure as="nav" className={`${color} fixed top-0 left-0 z-50 py-1 w-full`}>
      {({ open }) => (
        <>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                    </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-3">
                        {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                            item.current ? 'bg-gray-800 text-white' : 'text-gray-300 transition duration-500 hover:scale-110 hover:text-white',
                            'px-3 py-2 rounded-xl text-md font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </a>
                        ))}
                    </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <a target={target} className="items-center shadow-xl border-0 py-1 px-6 font-semibold rounded-xl bg-gray-100 text-gray-700 hover:text-white hover:bg-zinc-700 transition duration-300 hover:shadow-gray-100/50 hover:scale-110" href={link[1]}>
                        {link[0]}
                    </a>
                </div>
            </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
                <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                    item.current ? 'bg-zinc-800 text-white' : 'text-gray-300 hover:bg-zinc-700 hover:text-white',
                    'block px-3 py-2 rounded-xl text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
                >
                {item.name}
                </Disclosure.Button>
            ))}
          </div>
        </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavBar