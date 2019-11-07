import Dexie from "dexie";
import relationships from "dexie-relationships";

var db = new Dexie("DebatingDatabase", { addons: [relationships] });

db.version(1).stores({
  motion: 'id, title',
  debate: 'id, motionId -> motion.id',
  team: 'id, debateId -> debate.id',
  speaker: 'id, name, debateId -> debate.id, teamId -> team.id'
});
