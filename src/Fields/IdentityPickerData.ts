import {
  IIdentity,
  IPeoplePickerProvider,
  IPersonaConnections
} from "azure-devops-ui/IdentityPicker";

export class IdentityPickerProviderExample implements IPeoplePickerProvider {
  private currentPersonas: IIdentity[] = [];

  private bosses: IIdentity[] = [
    {
      displayName: "Harry Smith",
      entityId: "Harry Smith",
      entityType: "user",
      mail: "Harry@microsoft.com",
      originDirectory: "aad",
      originId: ""
    }
  ];

  private personas: IIdentity[] = [
    this.getSampleEntity("Julie Runkle", "Runkle@microsoft.com"),
    this.getSampleEntity("Aletha Fasano", "Fasano@microsoft.com"),
    this.getSampleEntity("Marcell Linville", "Linville@microsoft.com"),
    this.getSampleEntity("Birdie Demartino", "Demartino@microsoft.com"),
    this.getSampleEntity("Iona Mock", "Mock@microsoft.com"),
    this.getSampleEntity("Johnny Frier", "Frier@microsoft.com"),
    this.getSampleEntity("Stanford Hunziker", "Hunziker@microsoft.com"),
    this.getSampleEntity("Emmitt Heck", "Heck@microsoft.com"),
    this.getSampleEntity("Nichol Guerrette", "Guerrette@microsoft.com"),
    this.getSampleEntity("Hung Resendez", "Resendez@microsoft.com"),
    this.getSampleEntity("Lavinia Ceja", "Ceja@microsoft.com"),
    this.getSampleEntity("Antonina Amarante", "Amarante@microsoft.com"),
    this.getSampleEntity("Walter Sunday", "Sunday@microsoft.com"),
    this.getSampleEntity("Elisa Caylor", "Caylor@microsoft.com"),
    this.getSampleEntity("Korey Fredrickson", "Fredrickson@microsoft.com")
  ];

  private allEmployees: IIdentity[] = this.personas.concat(this.bosses);

  public onFilterIdentities(filter: string, selectedItems?: IIdentity[]) {
    return this.getPersonaList(filter, selectedItems);
  }

  public getEntityFromUniqueAttribute = (entityId: string): IIdentity => {
    return this.allEmployees.filter(x => x.entityId === entityId)[0];
  };

  public onRequestConnectionInformation = (
    entity: IIdentity,
    getDirectReports?: boolean
  ): IPersonaConnections => {
    return entity.entityId === "Julie Runkle"
      ? {
          directReports: getDirectReports ? this.personas : undefined,
          managers: []
        }
      : {
          directReports: getDirectReports ? [] : undefined,
          managers: this.bosses
        };
  };

  public onEmptyInputFocus(): IIdentity[] {
    return [
      this.getSampleEntity("Julie Runkle", "Runkle@microsoft.com"),
      this.getSampleEntity("Aletha Fasano", "Fasano@microsoft.com"),
      this.getSampleEntity("Marcell Linville", "Linville@microsoft.com")
    ];
  }

  private getSampleEntity(displayName: string, mail: string): IIdentity {
    return {
      displayName,
      entityId: displayName,
      entityType: "user",
      mail,
      originDirectory: "aad",
      originId: "",
      physicalDeliveryOfficeName: "123 Seasame Street",
      telephoneNumber: "555-5555"
    } as IIdentity;
  }

  // Simulate initial request delay when the user first tries to grab a list
  private getPersonaList(
    filter: string,
    selectedItems?: IIdentity[]
  ): Promise<IIdentity[]> | IIdentity[] {
    if (this.currentPersonas.length > 0) {
      return this.filterList(filter, selectedItems);
    } else {
      return new Promise<IIdentity[]>((resolve, reject) =>
        setTimeout(() => {
          this.currentPersonas = this.personas;
          resolve(this.filterList(filter, selectedItems));
        }, 800)
      );
    }
  }

  private filterList(filter: string, selectedItems?: IIdentity[]) {
    if (filter === "") {
      return [];
    }
    return this.currentPersonas.filter(
      x =>
        (selectedItems === undefined || selectedItems.indexOf(x) === -1) &&
        ((x.displayName &&
          x.displayName.toLowerCase().indexOf(filter.toLowerCase()) !== -1) ||
          (x.mail && x.mail.toLowerCase().indexOf(filter.toLowerCase()) !== -1))
    );
  }
}
