/* eslint-disable @next/next/no-img-element */
export default function MostPopular(){
    return (
        <div className="flex border rounded-lg justify-between">
                <div className="flex flex-col p-4">
                  <p>Medium French Fries</p>
                  <p className="text-sm text-thin text-gray-400">$3.99 320 Cal</p>
                </div>

                <div>
                  <img
                    className="w-36 h-36"
                    src="https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZGIzYzY5NjZhZTVmNDJlODU3NTk4MzMxYzIyMmQ0MjUvODU5YmFmZjFkNzYwNDJhNDVlMzE5ZDFkZTgwYWVjN2EuanBlZw=="
                  alt=""
                  />
                </div>
              </div>
    )
}