**<center>Nguồn: Beginner Free Contest 3</center>**

Đất nước Free Contest gồm $N$ thành phố được đánh số từ $1$ đến $N$. Có $M$ đường dây dẫn có thể xây dựng được, đường dây dẫn thứ $i$ kết nối hai thành phố $U_i$ và $V_i$ với chi phí xây dựng là $W_i$. Chính phủ của đất nước Free Contest có kế hoạch xây dựng lưới điện quốc gia để cung cấp điện cho toàn bộ các thành phố. Họ dự định sẽ đặt hai trạm phát điện tại hai thành phố khác nhau, và xây dựng một số đường dây dẫn để các thành phố đều được cung cấp điện. Một thành phố $u$ được cung cấp điện nếu như thành phố $u$ được đặt trạm phát điện, hoặc có một đường dây dẫn nối thành phố $u$ với một thành phố khác được cung cấp điện.

Chính phủ đã đề xuất $Q$ phương án đặt hai trạm phát điện. Với phương án thứ $i$, hai trạm phát điện sẽ được đặt lần lượt tại hai thành phố $A_i$ và $B_i$. Với mỗi phương án, họ cần tính tổng chi phí tối thiểu để xây dựng các đường dây dẫn sao cho các thành phố đều được cung cấp điện.

Bạn, một lập trình viên xuất sắc của đất nước Free Contest, được chính phủ tin cậy và giao cho nhiệm vụ này. Hãy hoàn thành nó một cách xuất sắc nhé!

## Dữ liệu vào:
- Dòng đầu tiên gồm hai số nguyên $N, M$ $(1 ≤ N ≤ 4000, 1 ≤ M ≤ 400000)$ - số thành phố của đất nước Free Contest và số đường dây dẫn có thể xây dựng.
- $M$ dòng tiếp theo, mỗi dòng gồm ba số nguyên $U_i, V_i$ và $W_i$ $(1 ≤ U_i, V_i ≤ N, U_i ≠ Vi, 1 ≤ W_i ≤ 10^9)$ mô tả đường dây dẫn thứ $i$. Dữ liệu vào đảm bảo, nếu xây dựng toàn bộ $M$ đường dây, từ thành phố bất kì đều có thể truyền điện đến một thành phố khác thông qua các đường dây dẫn.
- Dòng tiếp theo gồm một số nguyên $Q$ $(1 ≤ Q ≤ 200000)$ - số phương án chính phủ đã đề xuất.
- $Q$ dòng tiếp theo, mỗi dòng gồm hai số nguyên $A_i$ và $B_i$ $(1 ≤ A_i, B_i ≤ N, A_i ≠ B_i)$ mô tả phương án thứ $i$.

## Dữ liệu ra:
Với mỗi phương án, in ra một số nguyên duy nhất là tổng chi phí tối thiểu xây dựng các đường dây dẫn sao cho mỗi thành phố đều được cung cấp điện.

## Ví dụ:
#### Dữ liệu vào:
```
6 8
1 2 4
1 3 3
1 4 4
1 5 2
2 4 6
3 5 3
3 4 4
4 6 5
2
4 5
6 4
```

## Dữ liệu ra:
```
14
13
```

#### Giải thích:
Hình vẽ minh họa ví dụ thứ nhất (cạnh nét đứt biễu diễn các đường dây dẫn có thể xây dựng, cạnh nét liền biểu diễn các đường dây dẫn cần xây dựng, đỉnh màu đen biểu diễn thành phố được đặt trạm phát điện).
<img src="/images/problems/614/ELECTRIC.svg" width=600px>

## Giới hạn:
- **Subtask** $\#1$ $(10\%\text{ số điểm}): N, M ≤ 15, Q ≤ 100$;
- **Subtask** $\#2$ $(25\%\text{ số điểm}): Q = 1$;
- **Subtask** $\#3$ $(40\%\text{ số điểm}): Q ≤ 3000$;
- **Subtask** $\#4$ $(25\%\text{ số điểm}):$ Không có ràng buộc gì thêm.