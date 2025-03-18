import { MEMBERS } from "../constans";

function Members() {
  return (
    <div className="w-full lg:w-3/4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {MEMBERS.map((members, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <img
              className="w-40 h-32 rounded mx-auto mb-4 transition-all duration-300 hover:scale-150 object-cover"
              src={members.IMG}
              alt={`${members.NAME} Avatar`}
            />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {members.NAME}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Experience: {members.EXPERIENCE}
            </p>
            <p className="text-gray-600 dark:text-gray-400">{members.BIO}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;
