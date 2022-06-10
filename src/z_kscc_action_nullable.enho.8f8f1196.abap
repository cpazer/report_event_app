"Name: \TY:/IWBEP/CL_V4_MED_ACTION\ME:CONSTRUCTOR\SE:END\EI
ENHANCEMENT 0 Z_KSCC_ACTION_NULLABLE.
 IF mr_action->edm_name = 'createDelay'.
   READ TABLE mr_action->parameters ASSIGNING FIELD-SYMBOL(<ls_param_timestamp>) WITH KEY edm_name = 'TranspOrdEvtNewExpDateTime'.
   IF sy-subrc = 0.
     <ls_param_timestamp>-is_nullable = abap_true.
     <ls_param_timestamp>-value_control_field = 'TranspOrdEvtNewExpDateTime_VC'.
   ENDIF.
 ENDIF.
ENDENHANCEMENT.
