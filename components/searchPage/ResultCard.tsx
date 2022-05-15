import {
  mdiAccountGroup,
  mdiBriefcaseVariant,
  mdiMapMarkerRadiusOutline,
  mdiTimerSandComplete,
  mdiCardsHeartOutline,
} from '@mdi/js'
import Icon from '@mdi/react'

const ResultCard = () => {
  return (
    <div className="px-12 pb-6">
      <header className="flex items-center justify-between pt-[1.875rem] pb-4 text-[#010101]">
        <h3 className="text-2xl font-medium">Sales Excellence Manager</h3>
        <span className="text-lg font-medium">NGN 500,000</span>
      </header>
      <div className="flex items-center justify-start space-x-3 pb-[1.0625rem]">
        <div className=" flex h-8 w-8 items-center justify-center rounded-full bg-[#C4C4C4]">
          <Icon path={mdiBriefcaseVariant} size="16px" color="#4E5559" />
        </div>
        <p className="text-base font-normal text-[#2952A8]">ABELINIS LTD</p>
      </div>
      <div className="flex items-center justify-start space-x-6 pb-[1.0625rem] text-sm text-[#4E5559]">
        <div className="flex items-center justify-start space-x-3">
          <Icon path={mdiAccountGroup} size="16px" />
          <span>11 - 50 Employees</span>
        </div>
        <div className="flex items-center justify-start space-x-3">
          <Icon path={mdiMapMarkerRadiusOutline} size="16px" />
          <span>Lagos</span>
        </div>
        <div className="flex items-center justify-start space-x-3">
          <Icon path={mdiTimerSandComplete} size="16px" />
          <span>Full Time</span>
        </div>
      </div>
      <p className="pb-5 text-xs font-normal text-[#010101]">
        The overall purpose of role is to lead the Sales Capability Plans and
        implement a defined capability development agenda to enhance Sales Force
        Effectiveness for the Business. The role supports the Sales leadership
        team in the implementation of the following: Optimization of sales force
        productivity;
      </p>
      <div className="flex items-center justify-between">
        <div className="flex space-x-5 text-xs font-normal text-[#010101]">
          <span className="inline-flex h-[1.4375rem] w-[3.3125rem] items-center justify-center rounded-[0.3125rem] bg-[#DFE7FA]">
            Sales
          </span>
          <span className="inline-flex h-[1.4375rem] w-[6.0625rem] items-center justify-center rounded-[0.3125rem] bg-[#F3CFB9]">
            Management
          </span>
          <span className="inline-flex h-[1.4375rem] w-[4.4375rem] items-center justify-center rounded-[0.3125rem] bg-[#C9FFCE]">
            Reports
          </span>
        </div>
        <Icon path={mdiCardsHeartOutline} size="24px" />
      </div>
    </div>
  )
}

export default ResultCard
