import * as _trpc_server from '@trpc/server';
import * as express from 'express';
import * as qs from 'qs';
import * as express_serve_static_core from 'express-serve-static-core';

declare const appRouter: _trpc_server.CreateRouterInner<
  _trpc_server.RootConfig<{
    ctx: {
      req: express.Request<
        express_serve_static_core.ParamsDictionary,
        any,
        any,
        qs.ParsedQs,
        Record<string, any>
      >;
      res: express.Response<any, Record<string, any>>;
    };
    meta: object;
    errorShape: _trpc_server.DefaultErrorShape;
    transformer: _trpc_server.DefaultDataTransformer;
  }>,
  {
    sayHello: _trpc_server.BuildProcedure<
      'query',
      {
        _config: _trpc_server.RootConfig<{
          ctx: {
            req: express.Request<
              express_serve_static_core.ParamsDictionary,
              any,
              any,
              qs.ParsedQs,
              Record<string, any>
            >;
            res: express.Response<any, Record<string, any>>;
          };
          meta: object;
          errorShape: _trpc_server.DefaultErrorShape;
          transformer: _trpc_server.DefaultDataTransformer;
        }>;
        _ctx_out: {
          req: express.Request<
            express_serve_static_core.ParamsDictionary,
            any,
            any,
            qs.ParsedQs,
            Record<string, any>
          >;
          res: express.Response<any, Record<string, any>>;
        };
        _input_in: typeof _trpc_server.unsetMarker;
        _input_out: typeof _trpc_server.unsetMarker;
        _output_in: typeof _trpc_server.unsetMarker;
        _output_out: typeof _trpc_server.unsetMarker;
        _meta: object;
      },
      {
        message: string;
      }
    >;
  }
>;
type AppRouter = typeof appRouter;

type Square = {
  shape: 'square';
  size: number;
};
type Rectangle = {
  shape: 'rectangle';
  width: number;
  height: number;
};
type Shape = Square | Rectangle;
declare const SharedSquareObject: Shape;

export { type AppRouter, type Shape, SharedSquareObject };
