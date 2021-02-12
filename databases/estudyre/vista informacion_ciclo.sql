

create function id_ciclo() returns integer deterministic no sql return @id_ciclo;



create view informacion_ciclo as 
select cc.ciclo_id,cc.ciclo_desc,cc.ciclo_estatus_id,cc.fecha_inicio,cc.fecha_fin,
tg.grupo_id,tg.grupo,tg.nombre_grupo,tg.grupo_origen_id, tg.plan_orden_id,tg.cupo,
ipo.orden_jerarquico_id,coj.orden_jerarquico,tpe.plan_estudio_id,nivel_estudios,tpe.rvoe,ctpe.tipo_plan_estudio,periodo,tpe.plan_estudio,tpe.tipo_periodo_id,tpe.tipo_plan_estudio_id,
tpe.total_creditos,tpe.total_periodos,
tc.carrera_id,tc.carrera, tc.carrera_clave,tc.nivel_estudios_id,tc.institucion_id
from estudyce.cat_ciclo cc
join estudyce.tr_grupo tg on tg.ciclo_id = cc.ciclo_id
join estudydg.inter_plan_orden ipo on ipo.plan_orden_id = tg.plan_orden_id
join estudydg.cat_orden_jerarquico coj on coj.orden_jerarquico_id = ipo.orden_jerarquico_id
join estudydg.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
join estudydg.tr_carrera tc on tc.carrera_id = tpe.carrera_id
join estudydg.cat_tipo_plan_estudios ctpe on ctpe.tipo_plan_estudio_id = tpe.tipo_plan_estudio_id
join estudydg.cat_tipo_periodo  ctp on ctp.tipo_periodo_id = tpe.tipo_periodo_id
join estudydg.cat_nivel_estudios cne on cne.nivel_estudios_id = tc.nivel_estudios_id
where cc.estatus=1 and tg.estatus=1 and tg.estatus= 1 and ipo.estatus= 1 and tpe.estatus=1 and tc.estatus=1
and cc.ciclo_id = id_ciclo() order by tc.carrera_id

