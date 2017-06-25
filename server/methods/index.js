import system from './system';
import posts from './posts';
import _users from './_users';
import _colors from './_colors';

import { Methods as mthdsWidget } from 'mmks_widget';
import { Methods as mthdsBook } from 'mmks_book';

import { AccessControl, Widgets, _Widgets } from '../../lib/collections';

import App from '/lib/app';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import _lgr from '/lib/logging/server/serverLogger';

const ctx = { AccessControl, App, Meteor, check, _lgr };

let _widgets = mthdsWidget.new(Widgets, _Widgets, ctx);
let _books = mthdsBook.new(ctx);

export default function () {
  system();
  posts();
  _users();
  _colors();
  _widgets();
  _books();
}
