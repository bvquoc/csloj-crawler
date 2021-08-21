**<center>NGUỒN: VOI Training Camp 3H  (Ngày 01/11/2016 Am)</center>**
<br>


Mỗi buổi sáng có $n$ người đi bộ trên một con đường dài vô hạn. Mỗi người xuất phát từ các vị trí khác nhau trên đường, tất cả đi về cùng một hướng, tuy nhiên vận tốc của mỗi người có thể khác nhau.
Mỗi khi một người đi bộ phía sau gặp một người đi bộ phía trước thì họ lập thành một nhóm đi bộ cùng nhau trò chuyện vui vẻ. Vận tốc của nhóm đi bộ này tất nhiên là bằng vận tốc của người đi bộ phía trước.
Tất cả $n$ người đều đi bộ $T$ phút. Hỏi rằng ở thời điểm kết thúc việc đi bộ thì có bao nhiêu nhóm người đi cùng nhau?

## Dữ liệu vào
- Dòng đầu tiên chứa hai số nguyên dương $n,T$ $\left(1≤n≤10^5;1≤T≤10^9\right)$
- Tiếp theo là $n$ dòng, mỗi dòng chứa hai số nguyên là vị trí xuất phát và vận tốc của một người. Vị trí xuất phát là số nguyên không âm còn vận tốc là số nguyên dương, cả hai có giá trị không quá $10^9$. Các vị trí xuất phát của những người khác nhau là khác nhau và  chúng được liệt kê theo giá trị tăng dần của vị trí xuất phát.

## Dữ liệu ra:
- Một số nguyên duy nhất là số nhóm sau khi kết thúc buổi đi bộ.

## Ví dụ:
#### Dữ liệu vào:
```
5 3
0 1
1 2
2 3
3 2
6 1
```

#### Dữ liệu ra:
```
3
```

## Giới hạn:
- **Subtask** $\#1$: $(50\% \text { số điểm}) \ n≤5000$
- **Subtask** $\#2$: $(50\%\text { số điểm})\ n≤10^5$