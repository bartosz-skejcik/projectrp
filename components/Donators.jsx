import { DonatorsList } from "../config/donators"

export default function Donators() {
    return (
        <div class="container mx-auto px-4 sm:px-8 max-w-3xl my-20" id="donators">
            <h1 class="text-center text-5xl font-bold text-gray-200">Top Donatorzy</h1>
            <div class="py-8">
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block min-w-full rounded-lg overflow-hidden border-2 border-white">
                        <table class="min-w-full leading-normal">
                            <thead className="bg-zinc-900">
                                <tr>
                                    <th scope="col" class="invisible border-b-[2px] border-zinc-800 text-gray-200 font-semibold text-left text-sm uppercase">
                                        <div className="flex flex-row items-center justify-center">
                                            <div class="bg-red-500 m-1 w-3 h-3 rounded-full"></div>
                                            <div class="bg-yellow-500 m-1 w-3 h-3 rounded-full"></div>
                                            <div class="bg-green-500 m-1 w-3 h-3 rounded-full"></div>
                                        </div>
                                    </th>
                                    <th scope="col" class="px-5 py-3 border-b-[2px] border-zinc-800 text-gray-200 font-semibold text-left text-sm uppercase">
                                        użytkownik
                                    </th>
                                    <th scope="col" class="px-5 py-3 border-b-[2px] border-zinc-800 text-gray-200 font-semibold text-left text-sm uppercase">
                                        ilość
                                    </th>
                                    <th scope="col" class="px-5 py-3 border-b-[2px] border-zinc-800 text-gray-200 font-semibold text-left text-sm uppercase">
                                        Komentarz
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    DonatorsList.map((donator, index) => {
                                        return (
                                            <tr>
                                                <td class="invisible px-5 py-5 border-b-2 border-gray-200 text-sm">
                                                    <p class="text-gray-300 whitespace-no-wrap">
                                                    </p>
                                                </td>
                                                <td class="px-5 py-5 border-b-2 border-gray-200 text-sm">
                                                    <div class="flex items-center">
                                                        <div class="flex-shrink-0">
                                                            <a href="#" class="block relative">
                                                                <img alt="profil" src="/bg.webp" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                                                            </a>
                                                        </div>
                                                        <div class="ml-3">
                                                            <p class="text-gray-300 whitespace-no-wrap">
                                                                {donator.name}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-5 py-5 border-b-2 border-gray-200 text-sm">
                                                    <p class="text-gray-300 whitespace-no-wrap">
                                                        {donator.amount} PLN
                                                    </p>
                                                </td>
                                                <td class="px-5 py-5 border-b-2 border-gray-200 text-sm">
                                                    <p class="text-gray-300 whitespace-no-wrap">
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