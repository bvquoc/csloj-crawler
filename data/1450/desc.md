<!--**<center>NGUỒN: ĐỀ THI THỬ VOI 2015 3HB (Hải phòng - Hải Dương - Hưng Yên - Bắc Giang)</center>**-->

Nhân chuyến thi khảo sát đội tuyển HSG Tin học 3HB, HD có dịp về thăm quê, quê hương của HD có $N$ ngôi nhà và $N -1$ con đường hai chiều nối chúng, biết rằng:
- Giữa hai thành phố bất kỳ đều có đường đi trực tiếp hoặc gián tiếp (đi qua một số con đường trung gian);
- Chi phí để di chuyển trên con đường nối thành phố $x$ và thành phố $y$ là $C[x,y]$.

Vì ban ngày, HD phải thi HSG tin học, nên HD chỉ có thể đến thăm bạn vào chiều tối, mỗi buổi tối, anh ấy xác định $2$ người bạn cần phải thăm đang sống tại thành phố $A$ và thành phố $B$. HD muốn đến thăm người bạn $A$ trước, sau đó di chuyển đến thăm người bạn $B$. Chi phí về thời gian là rất lớn mà HD thì không được đi quá khuya (vì còn phải nghỉ ngơi để sáng hôm sau còn thi cho tốt và giành giải cao, phần thưởng lớn). Rất may, HD có một người bạn thân là HP, có thể dựng một con đường nối trực tiếp $A$ và $B$ với thời gian đi là $T$ để giúp HD giảm thiểu thời gian di chuyển từ nơi thi, đến thăm bạn $A$ sau đó thăm bạn $B$ (con đường này chỉ được xây dựng vào buổi tối, và hủy bỏ vào buổi sáng, sau khi HD đã đi thăm bạn xong).

**Yêu cầu:** Biết rằng HD ở lại quê hương (tại thành phố $1$) trong $Q$ buổi tối, bạn hãy tính thời gian đi thăm bạn ít nhất của HD vào mỗi tối? (Không tính thời gian từ $B$ quay trở về $1$).

## Dữ liệu vào:
- Dòng đầu chứa một số nguyên dương $N$ tương ứng là số thành phố;
- $N – 1$ dòng tiếp theo, dòng thứ $i\ (i=1..N-1)$ chứa hai số nguyên dương $p_i$ và $c_i$ tương ứng có nghĩa có con đường nối thành phố $i+1$ với thành phố $p_i$ và thời gian di chuyển là $C_i$;
- Dòng tiếp theo chứa số nguyên dương $Q$ tương ứng là số buổi tối HD ở lại thăm quê;
- $Q$ dòng tiếp theo, dòng thứ $i$ ghi ba số nguyên dương $A_i,B_i,T_i$ thể hiện ở tối thứ $i$ HD muốn thăm người bạn ở thành phố $A_i$, sau đó thăm người bạn ở thành phố $B_i$ và khi xây dựng một con đường tưởng tượng nối $A_i,B_i$ thì thời gian di chuyển trên con đường này là $T_i$.
Các số trên một dòng của input file được ghi cách nhau bởi dấu cách.

## Dữ liệu ra:
- Ghi ra trên $Q$ dòng, dòng thứ $i$ là thời gian ngắn nhất mà HD có thể đi thăm $A_i$ rồi đến thăm $B_i$ trong truy vấn thứ $i$ theo thứ tự.

## Ví dụ:
### Dữ liệu vào:
```
4
1 4
2 3
2 5
2
3 4 1
4 3 10
```

### Dữ liệu ra:
```
8
17
```

### Giải thích:
- Đường đi trong 2 truy vấn lần lượt là: $1→2→3→4$ và $1→2→4→2→3$.

## Giới hạn:
- $2 ≤N≤10^6; 1≤Q≤10^5$;
- $0≤C_i≤1000; 0≤T≤10^6; 2≤A,B≤N$;
- $20\%$ số điểm tương ứng với $N≤100,Q≤10$;
- $20\%$ số điểm khác tương ứng $N ≤ 3000, Q ≤ 10$;
- $20\%$ số điểm khác tương ứng với $N≤10^6, Q≤10$;
- $40\%$ số điểm còn lại không có ràng buộc bổ sung.