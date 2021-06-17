type CustomSectionDataObject = {
  id: string;
  type: "TEXT" | "DATE" | "DESC";
  name: string;
  value: Date | string;
};

export interface CustomSectionObject {
  header: string;
  hasTitleRow?: boolean;
  data?: Array<CustomSectionDataObject>;
  layout: Array<Array<CustomSectionDataObject["id"]>>;
}

export interface CustomSectionStore<T> extends CustomSectionObject {
  setState: (key: string, value: any) => void;
}
