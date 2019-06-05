import * as React from "react";
import "./Identity.scss";
import { Persona, IIdentity } from "azure-devops-ui/Persona";

export const Identity: React.FC<{
  image?: string;
  name: string;
  size: number;
}> = ({ image, name, size }) => {
  const imageUrl = image || determineImage(name);

  return (
    <div className="identity inline-flex-row flex-center">
      <Persona
        className="identity-image"
        size={size}
        identity={
          {
            entityId: name,
            entityType: "",
            originDirectory: "aad",
            originId: name,
            imageUrl: imageUrl
          } as IIdentity
        }
      />
      <div className="font-weight-semibold">{name}</div>
    </div>
  );
};

function determineImage(name: string): string | undefined {
  if (name.indexOf("Kat") !== -1) {
    return "/identities/kat.png";
  }

  if (name.indexOf("Celeste") !== -1) {
    return "/identities/celeste.png";
  }

  if (name.indexOf("Lydia") !== -1) {
    return "/identities/lydia.png";
  }

  if (name.indexOf("Christopher") !== -1) {
    return "/identities/christopher.png";
  }
}
