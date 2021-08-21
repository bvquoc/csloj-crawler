**<center>Nguồn:  Free Contest 04</center>**

Chỉ dẫn hàng ngày của nông dân John ghi rất rõ ràng: “Trước khi dùng bữa tối, đàn bò cần xếp thành một hàng dọc. Những con cầm tấm thẻ số $1$ luôn đứng trước những con cầm tấm thẻ đứng số $2$”.

Tuy nhiên, đàn bò của nông dân John lại gây náo loạn và đứng sai vị trí. Có tất cả $N$ con bò $(0 < N ≤ 30000)$, con bò thứ $k$ (từ đầu hàng trở xuống) hiện đang cầm tấm thẻ $D_k\ (1 ≤ D_k ≤ 2)$. Tuy nhiên, nông dân John không quá khắt khe về chuyện phạt lũ bò. Anh quyết định sửa lại giá trị trên một số tấm thẻ sao cho điều luật trên được thỏa mãn (sau khi sửa, có thể sẽ không còn tấm thẻ số $1$ hoặc số $2$ nào).

Hãy giúp nông dân John sửa ít tấm thẻ nhất mà vẫn đảm bảo điều luật. Anh không thể đổi chỗ các con bò cho nhau (các con bò có kích thước quá lớn để có thể làm việc đó).

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $N$;
- $N$ dòng sau, dòng thứ $k$ chứa số nguyên dương $D_k$.

## Dữ liệu ra:
- Một số nguyên duy nhất là số lần sửa tối thiểu.

## Ví dụ:
#### Dữ liệu vào:
```
7
2
1
1
1
2
2
1
```

#### Dữ liệu ra:
```
2
```

#### Giải thích:
- Sửa tấm thẻ đầu tiên và cuối cùng.