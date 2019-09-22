import ParkingInfoStore from './ParkingInfoStore';

class RootStore {
    constructor() {
        this.parkingInfoStore = new ParkingInfoStore(this);
    }
}

export default RootStore;
