import DevisInput from "./DevisInput";
import CustomSelect from "./CustomSelect";
const DevisForm1 = (props) => {
  const genders = [
    {
      label: "Select",
      value: "none",
    },
    {
      label: "Homme",
      value: "male",
    },
    {
      label: "Femme",
      value: "female",
    },
    {
      label: "Autre",
      value: "other",
    },
  ];

  const { data, handleChange } = props;
  return (
    <form className="flex flex-col gap-8">
      <div className="flex flex-col items-start justify-start text-start gap-2">
        <h2 className="font-bold text-xl">Détails personnels</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
          <DevisInput
            label="*Nom et Prénom :"
            name="fullname"
            type="text"
            value={data.fullname}
            onChange={handleChange}
          />

          <DevisInput
            label="*Date de naissance :"
            name="birthdate"
            type="date"
            value={data.birthdate}
            onChange={handleChange}
          />
          <DevisInput
            label="*Numéro de téléphone :"
            name="phone"
            type="phone"
            value={data.phone}
            onChange={handleChange}
          />
          <CustomSelect
            label="*Genre :"
            name="gender"
            type="select"
            options={genders}
            value={data.gender}
            onChange={handleChange}
          />
          <DevisInput
            label="*Adresse :"
            name="address"
            type="text"
            value={data.address}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex flex-col items-start justify-start text-start gap-2">
        <h2 className="font-bold text-xl">Informations sur le projet</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
          <DevisInput
            label="*Nom du projet :"
            name="projectname"
            type="text"
            value={data.projectname}
            onChange={handleChange}
          />
          <DevisInput
            label="Objectifs du projet :"
            name="projectobjectives"
            type="text"
            value={data.projectobjectives}
            onChange={handleChange}
          />
          <DevisInput
            label="Sites Web concurrents :"
            name="competitorwebsites"
            type="text"
            value={data.competitorwebsites}
            onChange={handleChange}
          />
          <DevisInput
            label="Coordonnées :"
            name="contactinformation"
            type="text"
            value={data.contactinformation}
            onChange={handleChange}
          />
          <DevisInput
            label="Caractéristiques et fonctionnalités :"
            name="featuresFunctionality"
            type="text"
            value={data.featuresFunctionality}
            onChange={handleChange}
          />
          <DevisInput
            label="Public cible :"
            name="targetaudience"
            type="text"
            value={data.targetaudience}
            onChange={handleChange}
          />
        </div>
      </div>
    </form>
  );
};

export default DevisForm1;