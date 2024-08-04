import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
   HomeLayout,
   Landing,
   Register,
   Error,
   Login,
   DashboardLayout,
   AllCasepapers,
   AddCasepaper,
   AllFollowuppapers,
   AddFollowuppaper,
   Profile,
   EditCasepaper,
   PrintDiet,
   PrintCasepaperChikitsa,
   EditFollowuppaper,
   PrintFollowuppaperChikitsa
} from './pages';

//loaders and actions
import { action as registerAction } from './pages/Register'
import { action as loginAction } from './pages/Login'
import { loader as dashboardLoader } from './pages/DashboardLayout'
import { action as addcasepaperAction } from './pages/AddCasepaper'
import { loader as allCasepapersLoader } from './pages/AllCasepapers'
import { loader as editcasepaperLoader } from './pages/EditCasepaper'
import { action as editcasepaperAction } from './pages/EditCasepaper'
import { action as deletecasepaperAction } from './pages/DeleteCasepaper'
import { loader as profileLoader } from './pages/Profile'
import { action as profileAction } from './pages/Profile'
import { loader as printDietLoader } from './pages/PrintDiet'
import { loader as printCasepaperChikitsaLoader } from './pages/PrintCasepaperChikitsa'
import { action as addFollowuppaper } from './pages/AddFollowuppaper'
import { loader as AllFollowuppaperLoader } from './pages/AllFollowuppapers'
import { loader as editFollowuppaperLoader } from './pages/EditFollowuppaper'
import { action as editFollowuppaperAction } from './pages/EditFollowuppaper'
import { action as deleteFollowuppaperAction } from './pages/DeleteFollowuppaper'
import { loader as printFollowuppaperChikitsaLoader } from './pages/PrintFollowuppaperChikitsa'


//default theme check
export const checkDefaultTheme = () => {
   const isDarkTheme =
      localStorage.getItem('darkTheme') === 'true'
   document.body.classList.toggle('dark-theme', isDarkTheme);
   return isDarkTheme;
};

checkDefaultTheme();

const router = createBrowserRouter([
   {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
         {
            index: true,
            // path: 'landing',
            element: <Landing />,

         },
         {
            path: '/register',
            element: <Register />,
            action: registerAction,
         },
         {
            path: 'login',
            element: <Login />,
            action: loginAction,
         },
         {
            path: 'print-diet/:id',
            element: <PrintDiet />,
            loader: printDietLoader
         },
         {
            path: 'print-casepaper-chikitsa/:id',
            element: <PrintCasepaperChikitsa />,
            loader: printCasepaperChikitsaLoader
         },
         {
            path: 'print-followuppaper-chikitsa/:id',
            element: <PrintFollowuppaperChikitsa />,
            loader: printFollowuppaperChikitsaLoader
         },
         {
            path: 'dashboard',
            element: <DashboardLayout />,
            loader: dashboardLoader,
            children: [
               {
                  index: true,
                  element: <AllCasepapers />,
                  loader: allCasepapersLoader
               },
               {
                  path: 'add-casepaper',
                  element: <AddCasepaper />,
                  action: addcasepaperAction,
               },
               {
                  path: 'all-followuppapers',
                  element: <AllFollowuppapers />,
                  loader: AllFollowuppaperLoader
               },
               {
                  path: 'add-followuppaper',
                  element: <AddFollowuppaper />,
                  action: addFollowuppaper
               },
               {
                  path: 'profile',
                  element: <Profile />,
                  loader: profileLoader,
                  action: profileAction,
               },
               {
                  path: 'edit-casepaper/:id',
                  element: <EditCasepaper />,
                  loader: editcasepaperLoader,
                  action: editcasepaperAction,
               },
               {
                  path: 'delete-casepaper/:id',
                  action: deletecasepaperAction
               },
               {
                  path: 'edit-followuppaper/:id',
                  element: <EditFollowuppaper />,
                  loader: editFollowuppaperLoader,
                  action: editFollowuppaperAction

               },
               {
                  path: 'delete-followuppaper/:id',
                  action: deleteFollowuppaperAction
               },

            ]
         },
         {
            path: 'about',
            element: (
               <div>
                  <h2>about page</h2>
               </div>
            ),
         },
      ]
   },
]);

const App = () => {
   return <RouterProvider router={router} />;
};
export default App;