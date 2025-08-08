# Standard Article + Quiz Generation Prompt Template

## 🎯 **Cursor Rules Activation**

```
@.cursorrules-articles @.cursorrules-quiz
```

## 📋 **Generation Request**

Generate a complete article implementation for **Caching layers** including:

### **Required Deliverables**

1. **Complete article content function** in `ArticleContentWrapper.tsx`
2. **Article ID integration** in conditional rendering chain
3. **Full content sections** with enterprise focus and accessibility enhancements
4. **Quiz validation** to ensure content-quiz alignment
5. **Deployment readiness verification**

### **Article Topic Details**

- **Article ID**: `caching-layers` (from learning-content.json)
- **Article Name**: `Caching layers` (as it appears in data)
- **Quiz Status**: ⚠️ **Quiz must be generated FIRST** - following @.cursorrules-quiz workflow
- **Focus**: Software Architecture & Design / Scalability Patterns

## ✅ **Implementation Requirements**

### **Layer 1: Rendering Implementation (ArticleContentWrapper.tsx)**

- [ ] Add `article.id === "caching-layers"` to conditional rendering chain
- [ ] Create `CachingLayersContent()` function with full implementation
- [ ] Include all required sections:
  - [ ] **Key Concepts** (3-4 core principles with accessibility context)
  - [ ] **Business Impact** (MetricsCard components with quantified benefits)
  - [ ] **Implementation Patterns** (practical application guidance)
  - [ ] **Customer Scenarios** (specific pain points with quoted examples)
  - [ ] **Cursor Implementation Considerations** (AI coding tool integration)

### **Layer 2: Quiz-Article Content Alignment**

**During Quiz Generation** (@.cursorrules-quiz):

- [ ] **Create business metrics** for later MetricsCard integration (e.g., "40-60% performance improvement")
- [ ] **Design customer pain point quotes** for both quiz questions and article scenarios
- [ ] **Establish technical concepts** that will be tested in quiz and explained in article
- [ ] **Define enterprise examples** for consistent use across quiz and article

**During Article Implementation** (@.cursorrules-articles):

- [ ] **Business Metrics Synchronization**: MetricsCard data must match quiz question percentages exactly
- [ ] **Customer Pain Points**: Quoted scenarios in article must appear in quiz questions
- [ ] **Technical Concepts**: All concepts tested in quiz must be explained in article
- [ ] **Enterprise Examples**: Company case studies should align between article and quiz

### **Layer 3: Component Interface Validation**

- [ ] **MetricsCard Usage**: Verify proper `metrics` array prop structure
- [ ] **Quote Escaping**: All quotes must use HTML entities (`&ldquo;`, `&rdquo;`, `&rsquo;`)
- [ ] **TypeScript Compliance**: No compilation errors
- [ ] **Styling Consistency**: Use established className patterns

## 🎯 **Accessibility Enhancement (98%/2% Rule)**

Add brief contextual explanations for technical concepts:

### **Enhancement Pattern Examples**

```typescript
❌ Before: "Clean boundaries ensure business logic independence"
✅ After: "Clean boundaries ensure business logic independence (like clear departmental responsibilities in an organization - each area can function effectively without being tightly coupled to others)"

❌ Before: "Dependency injection enables testing flexibility"
✅ After: "Dependency injection enables testing flexibility - meaning developers can easily test individual components without running the entire application infrastructure"
```

### **Guidelines**

- **Brief Context Only**: 1 sentence maximum, often parenthetical
- **Business Analogies**: Use familiar organizational or process metaphors
- **Practical Impact**: Explain "what this means for your organization"
- **No Over-Indexing**: Maintain technical depth as primary focus

## 🔧 **Component Usage Patterns**

### **MetricsCard Component**

```typescript
<MetricsCard
  title="Development Velocity"
  metrics={[
    {
      label: "Feature Development Speed",
      value: "40-60%", // MUST match quiz data exactly
      description: "Faster delivery through clear boundaries",
      trend: "up",
      color: "green",
    },
  ]}
  className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900"
/>
```

### **Customer Scenario Pattern**

```typescript
<div>
  <strong className="text-slate-700 dark:text-gray-300">
    Performance crisis:
  </strong>{" "}
  &ldquo;Our system slows down by 30% during peak hours due to tight
  coupling&rdquo;
</div>
```

## ✅ **Validation Checklist**

### **Pre-Deployment Verification**

- [ ] Article ID added to ArticleContentWrapper conditional chain
- [ ] Content function implemented with all required sections
- [ ] MetricsCard components use proper interface (metrics array)
- [ ] All quotes escaped using HTML entities
- [ ] TypeScript compilation successful (`npm run build`)
- [ ] Local development server displays full content (no placeholders)

### **Content Quality Verification**

- [ ] Business metrics in article match quiz question data exactly
- [ ] Customer pain points quoted in quiz appear in article scenarios
- [ ] Technical concepts tested in quiz are explained in article content
- [ ] Accessibility enhancements added (brief context for complex concepts)
- [ ] Enterprise examples align between article and quiz

### **Deployment Readiness**

- [ ] No TypeScript or linting errors
- [ ] Build process succeeds without warnings
- [ ] Article displays properly in development environment
- [ ] Quiz-article content synchronization verified

## 🎯 **Expected Outcome**

After implementation:

- ✅ Article displays full, comprehensive content (no placeholder)
- ✅ All business metrics align between article and quiz
- ✅ Customer scenarios include specific quoted pain points
- ✅ Technical concepts are accessible with brief explanatory context
- ✅ Enterprise focus maintained throughout
- ✅ Deployment ready with no errors

## 🚀 **Background Agent Instructions**

**CRITICAL**: Follow the correct workflow sequence per @.cursorrules-quiz and @.cursorrules-articles:

### **Phase 1: Quiz Generation (@.cursorrules-quiz)**

1. **Generate comprehensive quiz** with 8 MC + 2 freeform questions (25 points total)
2. **Include business metrics, customer scenarios, and pain points** for article alignment
3. **Ensure answer position distribution** (avoid bias - not all answers should be same letter)
4. **Add quiz to learning-content.json** with proper JSON structure
5. **Test quiz display** in development server

### **Phase 2: Article Implementation (@.cursorrules-articles)**

6. **Review generated quiz data** to extract metrics and scenarios for article alignment
7. **Implement complete article content function** in ArticleContentWrapper.tsx
8. **Add article ID to conditional rendering chain**
9. **Align MetricsCard data** with quiz question percentages exactly
10. **Include customer pain points** from quiz in article scenarios

### **Phase 3: Integration Testing**

11. **Validate TypeScript compilation** (`npm run build`)
12. **Test both quiz and article** display correctly in development
13. **Verify content synchronization** between quiz and article
14. **Deploy**: Only after all validation steps pass

---

**Template Usage**: Replace `[TOPIC_NAME]`, `[article-id]`, `[Article Name]`, and `[CATEGORY]` with specific values for each article generation request.
