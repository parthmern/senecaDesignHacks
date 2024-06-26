
import { cn } from "../lib/utils";
import DotPattern from "../../components/magicui/dot-pattern";

const DotPatternDemo = () => {
  return (
    <div className="relative bgLuv2 bg-opacity-30 opacity-50 flex h-full w-full max-w-[70%] mx-auto items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl">
      <p className="z-10 productFont opacity-100 text-white whitespace-pre-wrap text-center text-xl font-medium tracking-tighter  dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aperiam architecto suscipit recusandae debitis omnis necessitatibus et corrupti voluptate odio quaerat labore laboriosam doloremque eum odit culpa tenetur pariatur dolorum at, vitae praesentium officia. Eius voluptates aut voluptas perferendis incidunt corporis provident soluta, laudantium suscipit eligendi. Tempora animi hic sunt!
      </p>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
};

export default DotPatternDemo;
