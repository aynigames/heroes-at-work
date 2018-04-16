import { Organization } from 'app/models/organization';
import { Player } from 'app/models/player';


export class Game {
    public days: number = 0;
    public daysToEnd: number = 0;
    public minutesToEnd: number = 0;
    public name: string;
    public gameId: number;
    public gameTemplateId: number;
    public gameTemplate: string;
    public gameImageUrl: string;
    public missionId: number;
    public mission: string;
    public organization: Organization;
    public gameMasterId: number;
    public gameMaster: string;
    public gameMasterEmail: string;
    public gameMasterImageUrl: string;
    public status: string;
    public createdOn: Date;
    public startedOn: Date;
    public endedOn: Date;
    public visibility: string;
    public leaderboardPositions: number;
    public players: Player[];
    public settings: any = {};
    constructor(
    ) { 

    }
}
