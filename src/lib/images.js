function unsplash(id, w, h) {
  const size = h ? `w=${w}&h=${h}` : `w=${w}`;
  return `https://images.unsplash.com/photo-${id}?${size}&q=80&auto=format&fit=crop`;
}

export const PHOTOS = {
  reception: (w = 800, h = 600) => unsplash('1519494026892-80bbd2d6fd0d', w, h),
  treatmentRoomWhite: (w = 800, h = 600) => unsplash('1629909613654-28e377c37b09', w, h),
  treatmentRoomOrange: (w = 800, h = 600) => unsplash('1598256989800-fe5f95da9787', w, h),
  brightSuite: (w = 800, h = 600) => unsplash('1609207825181-52d3214556dd', w, h),
  xrayReview: (w = 800, h = 600) => unsplash('1588776814546-1ffcf47267a5', w, h),
  pediatricVisit: (w = 800, h = 600) => unsplash('1606811841689-23dfddce3e95', w, h),
  alignerCloseup: (w = 800, h = 600) => unsplash('1609840114035-3c981b782dfe', w, h),
  toothbrushes: (w = 800, h = 600) => unsplash('1607613009820-a29f7bb81c04', w, h),
  comfortHands: (w = 800, h = 600) => unsplash('1584515933487-779824d29309', w, h),

  drElena: (w = 500, h = 500) => unsplash('1594824476967-48c8b964273f', w, h),
  drAmara: (w = 500, h = 500) => unsplash('1559839734-2b71ea197ec2', w, h),
  drMarcus: (w = 500, h = 500) => unsplash('1612349317150-e413f6a5b16d', w, h),
  drTheo: (w = 500, h = 500) => unsplash('1622253692010-333f2da6031d', w, h),

  patientPriya: (w = 160, h = 160) => unsplash('1494790108377-be9c29b29330', w, h),

  servicesHero: (w = 1600, h = 900) => unsplash('1667133295315-820bb6481730', w, h),
  galleryHero: (w = 1600, h = 900) => unsplash('1704455306251-b4634215d98f', w, h),
};
