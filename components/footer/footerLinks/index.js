import links from "@utils/links.json"

export  function FooterLinks() {
  return (
    <div className="flex flex-wrap gap-6 mb-4">
      {
        links.map(({ id, title, links }) => (
          <div className="w-[142px]" key={id}>
            <h2 className="font-semibold text-xl text-gray-900">{title}</h2>
            <ul className="flex gap-2 flex-col">
              <li className="text-gray-400">{links.link1}</li>
              <li className="text-gray-400">{links.link2}</li>
              <li className="text-gray-400">{links.link3}</li>
              <li className="text-gray-400">{links.link4}</li>
              <li className="text-gray-400">{links.link5}</li>
            </ul>
          </div>
        ))
      }
    </div>
  )
}
