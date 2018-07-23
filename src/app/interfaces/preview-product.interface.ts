export interface IPreviewProduct {
    customer: ICustomerInfo;
    product: IProductInfo;
    typeOfPackging: ITypeOfPackaging;
    createIdeas: ICreateIdeas;
}
export interface ICustomerInfo {
    fullName: string;
    group: string;
    tel: string;
    line: string;
    facebook: string;
    instagram: string;
    zipCode: number;
    province: string;
    district: string;
    subDistrict: string;
}


export interface IProductInfo {
    name: string;
    detail: string;
    image: string;
    targetGroup: Array<string>;
    distribution: Array<string>;
}

export interface ITypeOfPackaging {
    paper: number;
    plastic: number;
}
export interface ICreateIdeas {
    packagingDesignConcept: number;
    moodAndTone: number;
    color: string;
}
