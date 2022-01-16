import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              รร.สระบุรีวิทยาคม
            </h5>
            <p className="my-3">
            - ชั้นมัธยมศึกษาตอนต้น (GPA 3.93)
            </p>
            <p className="my-3">
            - ชั้นมัธยมศึกษาตอนปลาย (GPA 3.97)
            </p>
          </div>
        </div>
        <div>
          <div className="">
            <h5 className="my-2 text-xl font-bold mt-14">รร.อนุบาลสระบุรี</h5>
            <p className="my-3">- ชั้นประถมศึกษา</p>
          </div>
        </div>
      </div>
      
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Skill</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools I Use</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
