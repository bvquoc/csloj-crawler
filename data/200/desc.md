Trên chiều dương của trục tọa độ Ox, có hai chú Kangaroo $A$ và Kangaroo $B$. Kangaroo $A$ ở điểm có tọa độ $x_A$, nhảy được $v_A$ (m) sau một lần nhảy. Kangaroo $B$ ở điểm có tọa độ $x_B$, nhảy được $v_B$ (m) sau một lần nhảy (cả hai chú Kangaroo đều nhảy tiến về phía trước).

**Yêu cầu:** Bạn hãy trả lời $t$ câu hỏi dạng $x_A,v_A,x_B, v_B$, cho biết hai chú Kangaroo có cùng đến một vị trí trong cùng một thời điểm được hay không:
- Ghi `YES` nếu hai chú Kangaroo cùng đến một vị trí trong cùng một thời điểm;
- Ghi `NO` nếu hai chú Kangaroo không thể cùng đến cùng một vị trí trong cùng một thời điểm.

## Dữ liệu vào: 
- Dòng đầu chứa số lượng câu hỏi $t\ (1≤t≤10)$;
- Mỗi câu hỏi có dạng bốn số nguyên dương $x_A,v_A, x_B, v_B\ (0≤x_A,x_B≤10000,1≤v_A,v_B≤10000)$.

## Dữ liệu ra:
- Ghi ra trên $t$ dòng, dòng thứ $i$ là đáp án câu hỏi $i$.

## Ví dụ:
### Dữ liệu vào:
```
2
0 3 4 2
0 2 5 3
```

### Dữ liệu ra:
```
YES
NO
```

### Giải thích:
- Câu hỏi $1$: $A:0→3→6→9→12$; $B:4→6→8→10→12$; Hai chú Kangaroo gặp nhau ở vị trí $12$ sau $4$ lần nhảy.
- Câu hỏi $2$: $A:0→2→4→6→8→10…$; $B:5→8→11→14$ Hai chú Kangaroo không thể gặp nhau ở một vị trí tại cùng một thời điểm.