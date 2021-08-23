HD trồng một loại cây chỉ có $2$ vòng sinh trưởng trong một năm. Vào mùa xuân, cây tăng gấp đôi chiều cao, vào mùa hè cây tăng chiều cao thêm $1$.

**Yêu cầu:** Biết rằng ban đầu cây HD trồng có chiều cao $1$ m. Bạn hãy trả lời $t$ câu hỏi dạng sau $N$ lần sinh trưởng, cây cao bao nhiêu mét?

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $t\ (1≤t≤10)$ là số lượng câu hỏi;
- $t$ dòng tiếp theo, dòng thứ $i$ là câu hỏi $i$ có một số nguyên dương $n\ (1≤n≤60)$.

## Dữ liệu ra:
- Ghi ra trên $t$ dòng, dòng thứ $i$ là đáp án câu hỏi $i$, là chiều cao của cây sau $n$ lần sinh trưởng.

## Ví dụ:
### Dữ liệu vào:
```
3
0
1
4
```

### Dữ liệu ra:
```
1
2
7
```

### Giải thích:
- Câu hỏi $1: n=0→h=1$;
- Câu hỏi $2: n=1→h=2$. Cây cao gấp đôi;
- Câu hỏi $3:n=2→h=3, n=3→h=6, n=4→h=7$.