drop table  if exists `inter_alumno_plan_orden`;


CREATE TABLE `inter_alumno_plan_orden` (
`alumno_id` int(11) NOT NULL,
`plan_orden_id` int(11) NOT NULL,
`generacion` varchar(100) DEFAULT NULL,
`fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
`fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
`estatus` int(1) DEFAULT NULL,
PRIMARY KEY (`alumno_id`,`plan_orden_id`),
CONSTRAINT `FK1_APO` FOREIGN KEY (`alumno_id`) REFERENCES `tr_alumno` (`alumno_id`),
CONSTRAINT `FK2_APO` FOREIGN KEY (`plan_orden_id`) REFERENCES `estudydg`.`inter_plan_orden` (`plan_orden_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into inter_alumno_plan_orden (alumno_id,plan_orden_id,generacion,estatus)
select alumno_id,ipo.plan_orden_id,"",1
from inter_alumno_plan iap
join estudydg.inter_plan_orden ipo on ipo.orden_jerarquico_id = iap.orden_jerarquico_id and iap.plan_estudio_id =ipo.plan_estudio_id;

drop table inter_alumno_plan;
RENAME TABLE `inter_alumno_plan_orden` TO `inter_alumno_plan`;