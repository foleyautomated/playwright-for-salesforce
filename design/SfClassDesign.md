:::mermaid
classDiagram
    Page <|-- SfBasePage
    Page <|-- SfCreateNewModal
    SfBasePage <|-- SfTopToolbar
    SfBasePage <|-- SfRecentlyViewed
    SfBasePage <|-- SfObjectPage
    SfObjectPage <|-- SfObjectPageDetails
    SfObjectPage <|-- SfObjectPageRelated
    SfObjectPageRelated <|-- SfObjectPageRelatedCard

    class SfRecentlyViewed {
        - LocateRecordRows()
        - CreateNew()
    }
    class SfObjectPage {
          - GotoRelated()
          - GotoDetails()
          - Locate()
    }
    class SfObjectPageDetails {
        - LocateTextField()
        - LocateDateFieled()
        - LocateEtcEtcField()
        - Cancel()
        - Save()
    }
    class SfObjectPageRelated {
        - LocateCards()
    }
    class SfObjectPageRelatedCard {
        - CreateNewRelatedObject()
        - LocateRelatedObjects()
        - ViewAll()
    }
    class SfCreateNewModal {
        - LocateModalBody()
        - LocateTextField()
        - LocateDateField()
        - LocateEtcEtcField()
        - Cancel()
        - Save()
        - Close()
    }
:::
