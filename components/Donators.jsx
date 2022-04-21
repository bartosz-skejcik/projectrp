import { DonatorsList } from "../config/donators"

export default function Donators() {
    return (
        <div className="container mx-auto px-4 sm:px-8 max-w-3xl mt-10" id="donators">
            <h1 className="text-center text-5xl font-bold text-gray-200">Top Donatorzy</h1>
            <div className="mt-8">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
                    <div className="inline-block min-w-full rounded-lg overflow-hidden border-2 border-white">
                        <table className="min-w-full leading-normal">
                            <thead className="bg-zinc-900">
                                <tr>
                                    <th scope="col" className="px-5 py-3 border-b-[2px] border-zinc-800 text-gray-200 font-semibold text-left text-sm uppercase">
                                        użytkownik
                                    </th>
                                    <th scope="col" className="px-5 py-3 border-b-[2px] border-zinc-800 text-gray-200 font-semibold text-left text-sm uppercase">
                                        ilość
                                    </th>
                                    <th scope="col" className="px-5 py-3 border-b-[2px] border-zinc-800 text-gray-200 font-semibold text-left text-sm uppercase">
                                        Komentarz
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    DonatorsList.map((donator, index) => {
                                        return (
                                            <tr>
                                                <td className="px-5 py-5 border-b-2 border-gray-200 text-sm">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0">
                                                            <a href="#" className="block relative">
                                                                <img alt="profil" src="/bg.webp" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                                            </a>
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="text-gray-300 whitespace-no-wrap">
                                                                {donator.name}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 border-b-2 border-gray-200 text-sm">
                                                    <p className="text-gray-300 whitespace-no-wrap">
                                                        {donator.amount} PLN
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b-2 border-gray-200 text-sm">
                                                    <p className="text-gray-300 whitespace-no-wrap">
                                                        {donator.message}
                                                    </p>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
                
    )
}