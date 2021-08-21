**<center>NGUỒN: Bài tập thầy Lê Minh Hoàng ôn Hải Phòng T11/2020</center>**

Giáo sư $X$ đang sáng tác một tiết mục “VŨ ĐIỆU GÓT GIÀY” và mời các sinh viên làm vũ công biểu diễn thử trong quá trình sáng tác. Vũ điệu bao gồm một số nhịp nhảy bằng một chân (lò cò). Một vũ điệu có thể coi là một dãy các ký tự $L$ và $R$. Ký tự $L$ có nghĩa là vũ công sẽ phải nhảy bằng chân trái còn ký tự $R$ có nghĩa là vũ công sẽ phải nhảy bằng chân phải.

Các vũ công nhận ra rằng phần khó trong một điệu nhảy phải là một đoạn các ký tự liên tiếp sao cho khi nhảy 
đoạn đó thì vũ công sẽ phải nhảy bằng một chân. Ta định nghĩa độ khó của vũ điệu bằng độ dài của dãy ký tự liên tiếp giống nhau dài nhất.
Bắt đầu với một vũ điệu gồm $𝑛$ ký tự $L$, tại mỗi bước giáo sư $X$ chọn một ký tự bất kỳ trong vũ điệu, nếu ký tự đó là $L$ sẽ được đổi thành $R$ và ngược lại, ký tự $R$ sẽ được đổi thành $L$.

**Yêu cầu:** Cho $𝑞$ phép đổi ký tự mà giáo sư X thực hiện, sau mỗi phép đổi ký tự, hãy giúp các vũ công xác định độ khó của vũ điệu.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương $𝑛 ≤ 10^9, 𝑞 ≤ 10^5$;
- $𝑞$ dòng tiếp theo mỗi dòng chứa một vị trí mà giáo sư X đổi ký tự tại vị trí đó.

## Dữ liệu ra:
- Ghi ra $𝑞$ dòng, mỗi dòng ghi độ khó của điệu nhảy sau mỗi phép đổi ký tự.

## Ví dụ:
#### Dữ liệu vào:
```
6 3
2
4
3
```

#### Dữ liệu ra:
```
4
2
3
```