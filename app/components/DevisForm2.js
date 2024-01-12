import DevisInput from "./DevisInput";
const DevisForm2 = (props) => {
  const { data, handleChange } = props;

  return (
    <form className="flex flex-col gap-8">
      <div className="flex flex-col items-start justify-start text-start gap-2">
        <h2 className="font-bold text-xl">Informations sur le projet</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
          <div className="flex flex-col gap-8">
            <DevisInput
              label="Hébergement et Domaine :"
              name="hostingAndDomain"
              type="text"
              value={data.hostingAndDomain}
              onChange={handleChange}
            />
            <DevisInput
              label="SEO et Marketing :"
              name="seoAndMarketing"
              type="text"
              value={data.seoAndMarketing}
              onChange={handleChange}
            />
          </div>
          <DevisInput
            label="Description du projet :"
            name="projectDescription"
            type="textarea"
            value={data.projectDescription}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex flex-col items-start justify-start text-start gap-2">
        <h2 className="font-bold text-xl">Services demandés</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
          <DevisInput
            label="Services dont vous avez besoin pour ce projet :"
            name="neededServices"
            type="text"
            value={data.neededServices}
            onChange={handleChange}
          />
          <DevisInput
            label="Date de début souhaitée :"
            name="startDate"
            type="date"
            value={data.startDate}
            onChange={handleChange}
          />
          <DevisInput
            label="Date de réalisation souhaitée :"
            name="completionDate"
            type="date"
            value={data.completionDate}
            onChange={handleChange}
          />
          <DevisInput
            label="Avez-vous été impliqué avec nous ?"
            name="involved"
            type="text"
            value={data.involved}
            onChange={handleChange}
          />
          <DevisInput
            label="Comment avez-vous entendu parler de nous ?"
            name="howDidYouHearAboutUs"
            type="text"
            value={data.howDidYouHearAboutUs}
            onChange={handleChange}
          />
          <DevisInput
            label="Extra Comments :"
            name="extraComments"
            type="text"
            value={data.extraComments}
            onChange={handleChange}
          />
        </div>
      </div>
    </form>
  );
};

export default DevisForm2;