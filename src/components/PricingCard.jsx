import React from 'react'

const PricingCard = () => {
    const pricingOptions = [
        {
            title: "Basic",
            price: "0 ETH",
            features: [
                "Access to decentralized apps (DApps)",
                "1 NFT storage",
                "Blockchain Explorer",
                "Basic DAO Voting Rights",
            ],
        },
        {
            title: "Advanced",
            price: "0.05 ETH",
            features: [
                "Access to decentralized apps (DApps)",
                "5 NFT storage",
                "Blockchain Analytics",
                "Advanced DAO Voting Rights",
            ],
        },
        {
            title: "Enterprise",
            price: "0.5 ETH",
            features: [
                "Access to decentralized apps (DApps)",
                "Unlimited NFT storage",
                "Dedicated Blockchain Nodes",
                "Full DAO Governance Participation",
            ],
        },
    ];
    return (
        <div className="mt-20">
            <div className="flex flex-wrap">
                {pricingOptions.map((option, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                        <div className="p-10 border border-neutral-700 rounded-xl">
                            <p className="text-4xl mb-8">
                                {option.title}
                                {option.title === "Pro" && (
                                    <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                                )}
                            </p>
                            <p className="mb-8">
                                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                                <span className="text-neutral-400 tracking-tight">/Month</span>
                            </p>
                            <ul>
                                {option.features.map((feature, index) => (
                                    <li key={index} className="mt-8 flex items-center">
                                        <span className="ml-2">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#"
                                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-blue-900 border border-blue-900 rounded-lg transition duration-200"
                            >
                                Subscribe
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default PricingCard
