import CardCase from "./scroll-component";
import CategoryService from "./category-component";
import Layout from "./layout";
import MealCard from "./mealcard-component";

const cardinfo = [
  {
    name: "McDonalds",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNDFlNDQ4NjE5ZGU5NTI3OTkwNDgyMjQ5YjkwZjE1NGMvNzkxNWM0YTc4YTlmOTRlZDU2MzE2YzdjNGRjMGVjODkuanBlZw==",
    time: "10-15 mins",
  },
  {
    name: "The Mukase",
    image:
      "https://images.unsplash.com/photo-1608500218861-01091cdc501e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWZyaWNhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
    time: "10-15 mins",
  },
  {
    name: "Long Horn Steak house",
    image:
      "https://plus.unsplash.com/premium_photo-1666978195894-b2e3a3f14d9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3RlYWt8ZW58MHx8MHx8fDA%3D",
    time: "10-15 mins",
  },
  {
    name: "Taco Bell",
    image:
      "https://plus.unsplash.com/premium_photo-1663853051487-59a6b639aff1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGFjb3xlbnwwfHwwfHx8MA%3D%3D",
    time: "10-15 mins",
  },
  {
    name: "Dunkin Doughnut",
    image:
      "https://images.unsplash.com/photo-1677921826943-a71371c5e718?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVua2luJTIwZG91Z2h8ZW58MHx8MHx8fDA%3D",
    time: "10-15 mins",
  },
  {
    name: "Subway",
    image:
      "https://images.unsplash.com/photo-1504937551116-cb8097e6f02a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3Vid2F5JTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    time: "10-15 mins",
  },
  {
    name: "Taco Bell",
    image:
      "https://plus.unsplash.com/premium_photo-1663853051487-59a6b639aff1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGFjb3xlbnwwfHwwfHx8MA%3D%3D",
    time: "10-15 mins",
  },
  {
    name: "Dunkin Doughnut",
    image:
      "https://images.unsplash.com/photo-1677921826943-a71371c5e718?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVua2luJTIwZG91Z2h8ZW58MHx8MHx8fDA%3D",
    time: "10-15 mins",
  },
  {
    name: "Subway",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/fo…wZjVjOWRmNDQwZDEwMjEzZTkzMjQ0ZTllYjdjYWQuanBlZw==",
    time: "10-15 mins",
  },
  {
    name: "McDonalds",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/fo…wZjVjOWRmNDQwZDEwMjEzZTkzMjQ0ZTllYjdjYWQuanBlZw==",
    time: "10-15 mins",
  },
  {
    name: "McDonalds",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNDFlNDQ4NjE5ZGU5NTI3OTkwNDgyMjQ5YjkwZjE1NGMvNzkxNWM0YTc4YTlmOTRlZDU2MzE2YzdjNGRjMGVjODkuanBlZw==",
    time: "10-15 mins",
  },
  {
    name: "McDonalds",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNDFlNDQ4NjE5ZGU5NTI3OTkwNDgyMjQ5YjkwZjE1NGMvNzkxNWM0YTc4YTlmOTRlZDU2MzE2YzdjNGRjMGVjODkuanBlZw==",
    time: "10-15 mins",
  },
  {
    name: "Taco Bell",
    image:
      "https://plus.unsplash.com/premium_photo-1663853051487-59a6b639aff1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGFjb3xlbnwwfHwwfHx8MA%3D%3D",
    time: "10-15 mins",
  },
  {
    name: "Dunkin Doughnut",
    image:
      "https://images.unsplash.com/photo-1677921826943-a71371c5e718?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVua2luJTIwZG91Z2h8ZW58MHx8MHx8fDA%3D",
    time: "10-15 mins",
  },
  {
    name: "Subway",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/fo…wZjVjOWRmNDQwZDEwMjEzZTkzMjQ0ZTllYjdjYWQuanBlZw==",
    time: "10-15 mins",
  },
  {
    name: "McDonalds",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/fo…wZjVjOWRmNDQwZDEwMjEzZTkzMjQ0ZTllYjdjYWQuanBlZw==",
    time: "10-15 mins",
  },
  {
    name: "McDonalds",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNDFlNDQ4NjE5ZGU5NTI3OTkwNDgyMjQ5YjkwZjE1NGMvNzkxNWM0YTc4YTlmOTRlZDU2MzE2YzdjNGRjMGVjODkuanBlZw==",
    time: "10-15 mins",
  },
  {
    name: "McDonalds",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNDFlNDQ4NjE5ZGU5NTI3OTkwNDgyMjQ5YjkwZjE1NGMvNzkxNWM0YTc4YTlmOTRlZDU2MzE2YzdjNGRjMGVjODkuanBlZw==",
    time: "10-15 mins",
  },
  {
    name: "Taco Bell",
    image:
      "https://plus.unsplash.com/premium_photo-1663853051487-59a6b639aff1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGFjb3xlbnwwfHwwfHx8MA%3D%3D",
    time: "10-15 mins",
  },
  {
    name: "Dunkin Doughnut",
    image:
      "https://images.unsplash.com/photo-1677921826943-a71371c5e718?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVua2luJTIwZG91Z2h8ZW58MHx8MHx8fDA%3D",
    time: "10-15 mins",
  },
  {
    name: "Subway",
    image:
      "https://images.unsplash.com/photo-1504937551116-cb8097e6f02a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3Vid2F5JTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    time: "10-15 mins",
  },
  {
    name: "McDonalds",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/fo…wZjVjOWRmNDQwZDEwMjEzZTkzMjQ0ZTllYjdjYWQuanBlZw==",
    time: "10-15 mins",
  },
  {
    name: "McDonalds",
    image:
      "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvNDFlNDQ4NjE5ZGU5NTI3OTkwNDgyMjQ5YjkwZjE1NGMvNzkxNWM0YTc4YTlmOTRlZDU2MzE2YzdjNGRjMGVjODkuanBlZw==",
    time: "10-15 mins",
  },
];

export default function FeedComponent() {
  return (
    <Layout>
      <div className="m-auto w-10/12">
        <CategoryService />
        <div className="py-4">
          <CardCase header={"National Brands"}>
          {cardinfo.map((info, index) => (
              <MealCard key={index} name={info.name} image={info.image} time={info.time} />
            ))}
          </CardCase>

          <CardCase header={"Today's offers"}>
          {cardinfo.map((info, index) => (
              <MealCard key={index} name={info.name} image={info.image} time={info.time} />
            ))}
          </CardCase>

          <CardCase header={"Popular near you"}>
          {cardinfo.map((info, index) => (
              <MealCard key={index} name={info.name} image={info.image} time={info.time} />
            ))}
          </CardCase>

        </div>
      </div>
    </Layout>
  );
}
