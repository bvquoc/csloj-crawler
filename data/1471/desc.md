Hùng vừa cắt một tấm gỗ mỏng hình chữ nhật thành nhiều miếng hình chữ nhật. Máy cưa cậu dùng mỗi lần sẽ nhận vào một miếng gỗ hình chữ nhật và cắt làm hai hình chữ nhật với tổng diện tích không đổi. Vị trí cắt có thể điều chỉnh được, chi phí cắt phụ thuộc vào trọng lượng miếng gỗ, do miếng gỗ ban đầu có độ dày đồng đều nên chi phí cắt có thể xem là diện tích miếng gỗ đó.

Miếng gỗ ban đầu có kích thước $n × m$. Hùng đã dùng bút vẽ $n − 1$ đường kẻ ngang và $m − 1$ đường kẻ dọc, kết hợp với các đường biên chia hình chữ nhật thành một lưới tọa độ. Các điểm được đánh tọa độ từ $(0, 0)$ đến $(n, m)$ từ trên xuống dưới, từ trái qua phải. Các lát cắt đều song song với biên và được đánh dấu bởi tọa độ các điểm này. Mỗi lát cắt là một đường liên tục và cắt dứt điểm một miếng nào đó làm hai phần. Miếng gỗ ban đầu đã được cắt xong, Hùng cần báo cáo lại quá trình cắt. Cậu nhớ chính xác tọa độ tất cả các lát cắt mà mình thực hiện, tuy nhiên không nhớ chính xác thứ tự đã cắt. Hùng đưa cho bạn danh sách các lát cắt này và nhờ bạn sắp xếp lại thứ tự cho hợp lý. Cậu cũng biết rằng có thể có nhiều thứ tự khác nhau, và quả quyết rằng trong số các thứ tự đúng đó, mình đã cắt theo một thứ có tổng chi phí cắt là nhỏ nhất.

**Yêu cầu:** Hãy giúp Hùng tìm ra một thứ tự cắt (tức hoán vị các lát cắt theo trí nhớ của Hùng) hợp lý và có tổng chi phí nhỏ nhất, hoặc thông báo là cậu đã nhớ nhầm.

## Dữ liệu vào:
- Dòng đầu chứa ba số nguyên dương là kích thước ban đầu và số lát cắt: $n, m, k\ (1 ≤ n, m ≤ 10^9, 1 ≤ k ≤ 10^5)$;
- $k$ dòng tiếp theo, mỗi dòng ghi một lát cắt: $u, v, x, y\ (0 ≤ u ≤ x ≤ n, 0 ≤ v ≤ y ≤ m)$ có nghĩa lát cắt này kéo dài từ điểm $(u, v)$ đến điểm $(x, y)$. Dữ liệu đảm bảo lát cắt song song với biên, không trùng lên biên của hình chữ nhật đang cắt và có độ dài khác $0$.

## Dữ liệu ra:
Nếu không có thứ tự nào hợp lý, in ra $-1$. Ngược lại in ra trên hai dòng:
- Dòng đầu chứa chi phí cắt nhỏ nhất tìm được;
- Dòng tiếp theo chứa $k$ số là một hoán vị của $\{1, 2, …, k\}$ cho biết thứ tự các lát cắt tìm được.

Dữ liệu đảm bảo chi phí nhỏ nhất nếu có sẽ không vượt quá $10^18$.

## Ví dụ:
#### Dữ liệu vào:
```
5 10 11
3 5 5 5
3 0 3 10
0 5 3 5
1 5 1 10
2 5 2 10
4 5 4 10
3 1 5 1
3 2 5 2
3 3 5 3
3 4 5 4
1 8 2 8
```

#### Dữ liệu ra:
```
164
2 1 3 4 5 6 8 7 9 11 10
```

## Giới hạn:
Với mỗi test, nếu chỉ tính đúng chi phí cắt sẽ được $50\%$ điểm của test đó, để nhận được $50\%$ điểm này thì dòng thứ hai bạn cần để trống.

- Subtask $\#1: 20\%$ số điểm có $k ≤ 8$;
- Subtask $\#2: 20\%$ số điểm khác có $n = 1$;
- Subtask $\#3: 20\%$ số điểm khác có thứ tự Hùng nhớ là một thứ tự hợp lý và tối ưu;
- Subtask $\#4: 20\%$ số điểm khác có Thứ tự Hùng nhớ là một thứ tự hợp lý;
- Subtask $\#5: 20\%$ còn lại có Ràng buộc gốc.