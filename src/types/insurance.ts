export type VehicleCategory = 'car' | 'two-wheeler' | 'commercial';

export interface InsurancePlan {
  id: string;
  name: string;
  category: VehicleCategory | 'comprehensive';
  badge?: string;
  badgeStyle?: 'popular' | 'special' | 'fleet' | 'mandatory' | 'featured';
  description: string;
  startingPrice: number | string;
  pricePeriod: string;
  icon: string;
  features: string[];
  isFeatured?: boolean;
}

export interface QuoteFormData {
  vehicleCategory: VehicleCategory;
  vehicleMake: string;
  vehicleModel: string;
  year: number;
  registrationNumber: string;
  ncbPercent: number; // No Claim Bonus e.g. 20, 35, 50%
  addons: {
    zeroDep: boolean;
    engineProtect: boolean;
    roadsideAssist: boolean;
    returnToInvoice: boolean;
    consumables: boolean;
    keyReplacement: boolean;
  };
  ownerName: string;
  phone: string;
  email: string;
}

export interface PolicyRecord {
  policyNumber: string;
  registrationNumber: string;
  vehicleName: string;
  category: VehicleCategory;
  ownerName: string;
  planName: string;
  expiryDate: string;
  premiumPaid: number;
  ncbBonus: number;
  status: 'Active' | 'Expiring Soon' | 'Expired';
}

export interface ClaimSubmission {
  claimId: string;
  registrationNumber: string;
  policyNumber: string;
  incidentDate: string;
  incidentLocation: string;
  incidentType: 'Accident Collision' | 'Breakdown' | 'Theft / Vandalism' | 'Natural Calamity';
  garageName: string;
  contactNumber: string;
  status: 'Surveyor Assigned' | 'Approved' | 'In Repair' | 'Disbursed';
  estimatedSettlementHours: number;
}
