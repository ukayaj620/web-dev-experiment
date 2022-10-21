import type { NextPage } from "next";
import Image from "next/image";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Home: NextPage = () => {
  const formRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => formRef.current,
    documentTitle: "Kedai Kami Studio MSME Profile",
  });

  return (
    <main className="flex w-full flex-col items-center bg-stone-200">
      <div className="flex w-full px-4 py-2 bg-neutral-50">
        <button
          onClick={handlePrint}
          className="bg-custom-blue-700 rounded-md px-4 py-2 text-center text-neutral-50 text-sm ml-auto"
        >
          Cetak
        </button>
      </div>
      <div className="w-full flex justify-center items-center my-4">
        <div
          ref={formRef}
          className="w-full max-w-[47.25rem] flex flex-col pt-8 bg-white items-center h-[1070px]"
        >
          <div className="flex items-center space-x-4">
            <Image
              src="/kedaikami.png"
              width={88}
              height={88}
              alt="kedai kami studio"
              layout="fixed"
            />
            <div className="flex flex-col items-center">
              <h1 className="text-neutral-900 text-2xl font-bold">
                KEDAI KAMI STUDIO
              </h1>
              <p className="text-neutral-900 text-xs">
                Jalan Stolia Bunawa No. 61 Telp (061) 1231234 Fax. (061) 8794562
                Medan 20202
              </p>
            </div>
          </div>
          <h2 className="text-neutral-900 text-xl font-bold mt-3 mb-4">
            MSME PROFILE
          </h2>
          <p className="indent-12 w-[39rem] text-justify text-sm my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            architecto nisi quo, quia eius deleniti amet laborum sunt ratione
            inventore consectetur! A unde repellendus, accusantium quam repellat
            exercitationem fuga cumque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolor, architecto nisi quo, quia eius deleniti
            amet laborum sunt ratione inventore consectetur! A unde repellendus,
            accusantium quam repellat exercitationem fuga cumque. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Dolor, architecto nisi
            quo, quia eius deleniti amet laborum sunt ratione inventore
            consectetur! A unde repellendus, accusantium quam repellat
            exercitationem fuga cumque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolor, architecto nisi quo, quia eius deleniti
            amet laborum sunt ratione inventore consectetur! A unde repellendus,
            accusantium quam repellat exercitationem fuga cumque.
          </p>
          <p className="indent-12 w-[39rem] text-justify text-sm my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            architecto nisi quo, quia eius deleniti amet laborum sunt ratione
            inventore consectetur! A unde repellendus, accusantium quam repellat
            exercitationem fuga cumque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolor, architecto nisi quo, quia eius deleniti
            amet laborum sunt ratione inventore consectetur! A unde repellendus,
            accusantium quam repellat exercitationem fuga cumque. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Dolor, architecto nisi
            quo, quia eius deleniti amet laborum sunt ratione inventore
            consectetur! A unde repellendus, accusantium quam repellat
            exercitationem fuga cumque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolor, architecto nisi quo, quia eius deleniti
            amet laborum sunt ratione inventore consectetur! A unde repellendus,
            accusantium quam repellat exercitationem fuga cumque.
          </p>
          <p className="indent-12 w-[39rem] text-justify text-sm my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            architecto nisi quo, quia eius deleniti amet laborum sunt ratione
            inventore consectetur! A unde repellendus, accusantium quam repellat
            exercitationem fuga cumque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolor, architecto nisi quo, quia eius deleniti
            amet laborum sunt ratione inventore consectetur! A unde repellendus,
            accusantium quam repellat exercitationem fuga cumque. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Dolor, architecto nisi
            quo, quia eius deleniti amet laborum sunt ratione inventore
            consectetur! A unde repellendus, accusantium quam repellat
            exercitationem fuga cumque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolor, architecto nisi quo, quia eius deleniti
            amet laborum sunt ratione inventore consectetur! A unde repellendus,
            accusantium quam repellat exercitationem fuga cumque.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
