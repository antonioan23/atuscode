import { run as runTui, type TuiInput } from "@hostclube/tui"
import { Global } from "@hostclube/core/global"
import { Effect } from "effect"

export function run(input: TuiInput) {
  return runTui(input).pipe(Effect.provide(Global.defaultLayer))
}
