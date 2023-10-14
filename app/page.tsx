import React from 'react';
import Image from 'next/image';
import ImageUrl from '@/enums/imageUrl';
import ExternalLink from '@/enums/externalLinks';
import { cosplayGuests, events, vtuberGuests } from '@/constants/lists';
import HomeGuest from '@/components/HomeGuest';
import HomeEvent from '@/components/HomeEvent';
import HomeSponsor from '@/components/HomeSponsor';

const Home = () => {
  return (
    <>
      <section className="flex flex-col gap-5 min-h-screen justify-center items-center bg-site-blue-100/80 bg-hero bg-cover bg-center bg-blend-overlay pt-20">
        <h2>CONNECTING THE WORLD, ONE HOBBY AT A TIME</h2>
        <figure className="relative aspect-[656/442] w-[60%] md:w-72">
          <Image src={ImageUrl.VENUE} alt="venue" fill className="object-cover" />
        </figure>
        <p>June 24-25, 2023 SM Seaside Cebu</p>
        <a href={ExternalLink.THROWBACK_VIDEO} rel="noreferrer" target="_blank">
          Throwback Video
        </a>
      </section>
      <section
        id="guests"
        className="flex flex-col gap-5 min-h-screen justify-center items-center bg-site-blue-100/80 bg-guests bg-cover bg-center bg-blend-overlay px-10 py-10"
      >
        <h2>COSPLAY GUESTS</h2>
        <div className="flex flex-wrap gap-5 justify-center items-center">
          {cosplayGuests.map((guest) => {
            return <HomeGuest key={guest} imageUrl={guest} />;
          })}
        </div>
        <h2>VTUBER GUESTS</h2>
        <div className="flex flex-wrap gap-5 justify-center items-center">
          {vtuberGuests.map((guest) => {
            return <HomeGuest key={guest} imageUrl={guest} />;
          })}
        </div>
      </section>
      <section
        id="shirt"
        className="flex flex-col gap-5 min-h-screen justify-center items-center bg-site-blue-100/80 bg-shirt bg-cover bg-center bg-blend-overlay px-10 py-10"
      >
        <h2>OFFICIAL OF23 SHIRT</h2>
        <figure className="relative aspect-[783/611] w-[70%] md:w-96">
          <Image src={ImageUrl.SHIRT} alt="shirt" fill className="object-cover" />
        </figure>
      </section>
      <section
        id="events"
        className="flex flex-col gap-5 min-h-screen justify-center items-center bg-site-blue-100/80 bg-events bg-center bg-blend-overlay px-10 py-10"
      >
        <h2>EVENTS</h2>
        <div className="flex flex-wrap gap-7 justify-center items-center">
          {events.map((event) => {
            return <HomeEvent key={event.name} imageUrl={event.imageUrl} name={event.name} />;
          })}
        </div>
      </section>
      <section className="flex flex-col gap-5 min-h-screen justify-center items-center bg-site-blue-100/80 bg-sponsors bg-center bg-blend-overlay px-10 py-10">
        <h2>SPONSORS</h2>
        <div className="flex flex-wrap gap-10 justify-center">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <p>Venue Partner</p>
              <HomeSponsor imageUrl={ImageUrl.SM_SEASIDE} aspect="aspect-[400/92]" />
            </div>
            <div className="flex flex-wrap gap-10 justify-center">
              <div className="flex flex-col justify-between">
                <p>Presenters</p>
                <HomeSponsor imageUrl={ImageUrl.PROFOOD} aspect="aspect-[246/248]" width="w-44" />
                <HomeSponsor imageUrl={ImageUrl.PHOENIX} aspect="aspect-[250/251]" width="w-44" />
                <HomeSponsor imageUrl={ImageUrl.NIKKE} aspect="aspect-[250/141]" width="w-44" />
              </div>
              <div className="flex flex-col gap-3">
                <p>Co-Presenters</p>
                <HomeSponsor imageUrl={ImageUrl.NONKI} aspect="aspect-[175/140]" width="w-32" />
                <HomeSponsor imageUrl={ImageUrl.ANGKAS} aspect="aspect-[175/132]" width="w-32" />
                <p>Media Partners</p>
                <HomeSponsor imageUrl={ImageUrl.SUNSTAR} aspect="aspect-[175/41]" width="w-32" />
                <HomeSponsor imageUrl={ImageUrl.KEEPSAKES} aspect="aspect-[175/45]" width="w-32" />
                <HomeSponsor imageUrl={ImageUrl.RADIO_105} aspect="aspect-[175/175]" width="w-32" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <p>Minor Sponsors</p>
            <HomeSponsor imageUrl={ImageUrl.INKPLACE} aspect="aspect-[200/51]" width="w-36" />
            <HomeSponsor imageUrl={ImageUrl.HOBBIWORKZ} aspect="aspect-[200/100]" width="w-36" />
            <HomeSponsor imageUrl={ImageUrl.MACOLOGY} aspect="aspect-[200/200]" width="w-36" />
            <HomeSponsor imageUrl={ImageUrl.NATURES_SPRING} aspect="aspect-[200/97]" width="w-36" />
            <HomeSponsor
              imageUrl={ImageUrl.WORKPLACE_CAFE}
              aspect="aspect-[200/119]"
              width="w-36"
            />
            <HomeSponsor imageUrl={ImageUrl.ANE_MI} aspect="aspect-[200/200]" width="w-36" />
          </div>
          <div className="flex flex-col gap-5">
            <p>Major Sponsors</p>
            <HomeSponsor imageUrl={ImageUrl.SELECTA} aspect="aspect-[300/151]" width="w-56" />
            <HomeSponsor
              imageUrl={ImageUrl.MY_LANGUAGE_CAFE}
              aspect="aspect-[300/110]"
              width="w-56"
            />
            <HomeSponsor imageUrl={ImageUrl.PNB} aspect="aspect-[300/201]" width="w-56" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

